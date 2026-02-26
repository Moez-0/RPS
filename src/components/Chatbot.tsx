import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, User, Bot } from 'lucide-react';
import { getSolarAdvice } from '@/src/services/geminiService';
import ReactMarkdown from 'react-markdown';
import { Locale, TranslationSet } from '@/src/i18n/translations';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

interface ChatbotProps {
  locale: Locale;
  chatbot: TranslationSet['chatbot'];
}

export default function Chatbot({ locale, chatbot }: ChatbotProps) {
  const [flowStep, setFlowStep] = useState(0);
  const [flowAnswers, setFlowAnswers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: `${chatbot.welcome}\n\n${chatbot.flowQuestions[0]}` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef(false);
  const isFlowActive = flowStep < chatbot.flowQuestions.length;
  const currentFlowSuggestions = chatbot.flowAnswerSuggestions?.[flowStep] ?? [];

  useEffect(() => {
    setFlowStep(0);
    setFlowAnswers([]);
    setMessages([{ role: 'bot', content: `${chatbot.welcome}\n\n${chatbot.flowQuestions[0]}` }]);
    setInput('');
    setIsLoading(false);
  }, [locale, chatbot]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const processUserMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading || processingRef.current) return;

    processingRef.current = true;
    try {
      setInput('');
      setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

      if (flowStep < chatbot.flowQuestions.length) {
        const updatedAnswers = [...flowAnswers, userMessage.trim()];
        setFlowAnswers(updatedAnswers);

        const nextStep = flowStep + 1;
        if (nextStep < chatbot.flowQuestions.length) {
          setFlowStep(nextStep);
          setMessages(prev => [
            ...prev,
            { role: 'bot', content: `${chatbot.answerRecorded}\n\n${chatbot.flowQuestions[nextStep]}` },
          ]);
          return;
        }

        setFlowStep(nextStep);
        setIsLoading(true);
        try {
          const qaSummary = chatbot.flowQuestions
            .map((question, index) => `${index + 1}. ${question}\nAnswer: ${updatedAnswers[index] || ''}`)
            .join('\n\n');

          const analysisPrompt = `Please analyze this Tunisia solar technical-flow intake and provide a concise recommendation:\n\n${qaSummary}\n\nFocus on likely system size guidance, location yield context, roof feasibility implications, and ANME financing relevance.`;
          const botResponse = await getSolarAdvice(analysisPrompt, locale);

          setMessages(prev => [
            ...prev,
            {
              role: 'bot',
              content: `${chatbot.recommendationLead}\n\n${botResponse || 'Unable to generate recommendation right now.'}\n\n${chatbot.contactPrompt}`,
            },
          ]);
        } catch {
          setMessages(prev => [
            ...prev,
            {
              role: 'bot',
              content: `${chatbot.recommendationLead}\n\nUnable to generate recommendation right now. Please try again.\n\n${chatbot.contactPrompt}`,
            },
          ]);
        } finally {
          setIsLoading(false);
        }
        return;
      }

      setIsLoading(true);
      try {
        const botResponse = await getSolarAdvice(userMessage.trim(), locale);
        setMessages(prev => [...prev, { role: 'bot', content: botResponse || "I'm sorry, I couldn't process that." }]);
      } catch {
        setMessages(prev => [...prev, { role: 'bot', content: "I'm sorry, I couldn't process that." }]);
      } finally {
        setIsLoading(false);
      }
    } finally {
      processingRef.current = false;
    }
  };

  const handleSend = async () => {
    await processUserMessage(input);
  };

  const handleStarterQuestion = async (question: string) => {
    await processUserMessage(question);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-7 right-7 w-16 h-16 md:w-20 md:h-20 bg-ips-yellow text-ips-blue rounded-full shadow-2xl shadow-ips-yellow/50 ring-4 ring-white flex items-center justify-center hover:scale-110 transition-all z-40 group"
      >
        <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-2 -right-2 bg-ips-blue text-white text-[10px] font-bold px-2 py-1 rounded-full">
          RPS
        </span>
        <span className="absolute -inset-1 rounded-full border-2 border-ips-yellow/60 animate-ping" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-6 w-[92vw] max-w-[430px] h-[620px] bg-white rounded-3xl shadow-2xl border-2 border-ips-yellow/60 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-ips-blue p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md">
                  <img src="/logo.png" alt="RPS Solar Energy" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold tracking-wide">{chatbot.title}</h3>
                  <p className="text-xs text-white/70">{chatbot.subtitle}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/15 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 bg-gradient-to-b from-slate-50 to-white">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-ips-yellow text-ips-blue' : 'bg-ips-blue text-white'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-ips-yellow text-ips-blue rounded-tr-none font-medium' : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'}`}>
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                      <Bot size={16} className="text-slate-400" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 rounded-tl-none shadow-sm flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-200">
              {isFlowActive && currentFlowSuggestions.length > 0 && (
                <div className="mb-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{chatbot.quickAnswersTitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {currentFlowSuggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => processUserMessage(suggestion)}
                        disabled={isLoading}
                        className="text-[10px] px-3 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-50"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!isFlowActive && (
                <div className="mb-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{chatbot.starterTitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {chatbot.starterQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => handleStarterQuestion(question)}
                        disabled={isLoading}
                        className="text-[10px] px-3 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-50"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={chatbot.inputPlaceholder}
                  className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ips-yellow/40 focus:border-ips-yellow transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-ips-blue text-white rounded-lg hover:bg-ips-blue/90 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-500 mt-3">
                {chatbot.disclaimer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
