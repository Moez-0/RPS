import OpenAI from "openai";

const metaEnv = ((import.meta as any).env ?? {}) as Record<string, string | undefined>;

const apiKey =
  process.env.OPENROUTER_API_KEY ||
  metaEnv.OPENROUTER_API_KEY ||
  metaEnv.VITE_OPENROUTER_API_KEY;

const ai = apiKey
  ? new OpenAI({
      apiKey,
      baseURL: "https://openrouter.ai/api/v1",
      dangerouslyAllowBrowser: true,
    })
  : null;

type Locale = "en" | "fr" | "ar";

export async function getSolarAdvice(prompt: string, locale: Locale = "en") {
  if (!ai) {
    return "OpenRouter API key is missing. Please set OPENROUTER_API_KEY in your environment file and restart the app.";
  }

  try {
    const responseLanguage =
      locale === "fr" ? "French" : locale === "ar" ? "Arabic" : "English";

    const systemInstruction = `
You are a helpful and expert solar energy consultant for RPS Solar Energy.

Your goal is to educate potential customers about solar energy, its benefits, and RPS Solar's services.
RPS Razgallah specializes in the sale, study, and installation of custom photovoltaic solutions.
RPS Solar Energy is certified by ANME.
We support homeowners and businesses in their energy transition with reliable, high-performance, and sustainable solar systems.
RPS Solar Energy is a Tunisia-based company located at Rue 20 Mars en face kiosque Agil, Msaken, Tunisia, 4070.
For direct contact, customers can call +216 27 139 263.

Keep your tone professional, warm, and encouraging.
Use clear, non-technical language where possible.

If asked about pricing, mention that it varies based on home size and location, and encourage them to use the free estimation tool on the website.

When users want an estimate, perform a technical flow using these questions and explain why each matters in Tunisia:
1) "What is your average STEG bill?" -> determines potential system size (kWp) and high-consumption bracket relevance (especially above 419 millimes/kWh).
2) "Where in Tunisia are you?" -> estimates solar yield; southern regions such as Sfax/South generally produce more than northern coastal zones like Bizerte (around 1600 kWh/kWp context).
3) "Is your roof space clear?" -> checks physical feasibility, terrace availability, and shading constraints.
4) "Would you like an ANME loan?" -> helps plan financing and can recommend Prosol Elec style financing through local banks.

Ask these progressively, summarize the answers, then provide a concise preliminary recommendation.

RPS Solar offers residential solar, commercial solar, and energy storage (batteries).
We offer a 7-year warranty and 0 upfront financing.

Always respond in ${responseLanguage}.
`;

    const requestPromise = ai.chat.completions.create({
      model: "arcee-ai/trinity-large-preview:free", // <-- free model
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: prompt },
      ],
    });

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("OpenRouter request timeout")), 30000);
    });

    const response = await Promise.race([requestPromise, timeoutPromise]);

    return response.choices?.[0]?.message?.content || "No response generated.";
  } catch (error) {
    console.error("OpenRouter Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting to my knowledge base. Please try again in a moment!";
  }
}