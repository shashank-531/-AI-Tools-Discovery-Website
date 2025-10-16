export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: string;
  rating: number;
  features: string[];
  link: string;
  detailedDescription?: string;
}

export const toolsData: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Advanced conversational AI for content generation, coding help, and creative writing.",
    category: "Content Creation",
    pricing: "Freemium",
    rating: 4.8,
    features: [
      "Natural language conversations",
      "Code generation and debugging",
      "Creative writing assistance",
      "Multiple language support"
    ],
    link: "https://chat.openai.com",
    detailedDescription: "ChatGPT is a powerful AI language model that can assist with a wide range of tasks including content creation, coding, analysis, and creative problem-solving."
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster with intelligent suggestions.",
    category: "Coding & Development",
    pricing: "Paid",
    rating: 4.7,
    features: [
      "Code autocompletion",
      "Multi-language support",
      "Context-aware suggestions",
      "IDE integration"
    ],
    link: "https://github.com/features/copilot",
    detailedDescription: "GitHub Copilot is an AI-powered code completion tool that helps developers write code faster and with fewer errors."
  },
  
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Create stunning AI-generated artwork and images from text descriptions.",
    category: "Design & Graphics",
    pricing: "Paid",
    rating: 4.9,
    features: [
      "High-quality image generation",
      "Various artistic styles",
      "Upscaling capabilities",
      "Community gallery"
    ],
    link: "https://midjourney.com",
    detailedDescription: "Midjourney is an AI art generator that creates beautiful, unique images from text prompts."
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI-powered workspace for notes, docs, and project management with smart writing assistance.",
    category: "Productivity & Automation",
    pricing: "Freemium",
    rating: 4.6,
    features: [
      "Smart writing assistant",
      "Auto-summarization",
      "Task automation",
      "Collaborative workspace"
    ],
    link: "https://notion.so",
    detailedDescription: "Notion AI combines workspace organization with AI-powered writing and productivity features."
  },
  {
    id: "tableau",
    name: "Tableau",
    description: "Powerful data visualization and business intelligence platform with AI insights.",
    category: "Data Analysis & AI Research",
    pricing: "Paid",
    rating: 4.5,
    features: [
      "Interactive dashboards",
      "AI-powered insights",
      "Real-time data analysis",
      "Enterprise integration"
    ],
    link: "https://tableau.com",
    detailedDescription: "Tableau helps organizations visualize and understand their data with AI-enhanced analytics."
  },
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI content platform for creating blog posts, marketing copy, and social media content.",
    category: "Content Creation",
    pricing: "Paid",
    rating: 4.7,
    features: [
      "Long-form content generation",
      "Brand voice customization",
      "SEO optimization",
      "Multiple templates"
    ],
    link: "https://jasper.ai",
    detailedDescription: "Jasper AI is a comprehensive content creation platform designed for marketers and content creators."
  },
  {
    id: "tabnine",
    name: "Tabnine",
    description: "AI code completion tool that learns your coding patterns and suggests relevant code.",
    category: "Coding & Development",
    pricing: "Freemium",
    rating: 4.4,
    features: [
      "Personalized suggestions",
      "Team learning",
      "Privacy-focused",
      "All major IDEs supported"
    ],
    link: "https://tabnine.com",
    detailedDescription: "Tabnine provides intelligent code completion powered by machine learning."
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    description: "Design platform with AI-powered features for creating graphics, presentations, and videos.",
    category: "Design & Graphics",
    pricing: "Freemium",
    rating: 4.8,
    features: [
      "AI image generation",
      "Magic resize",
      "Background removal",
      "Template library"
    ],
    link: "https://canva.com",
    detailedDescription: "Canva combines easy-to-use design tools with AI-powered features for professional results."
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automation platform connecting your apps and services with AI-powered workflows.",
    category: "Productivity & Automation",
    pricing: "Freemium",
    rating: 4.6,
    features: [
      "5000+ app integrations",
      "Multi-step workflows",
      "AI-assisted automation",
      "No code required"
    ],
    link: "https://zapier.com",
    detailedDescription: "Zapier automates repetitive tasks by connecting your favorite apps and services."
  },
  {
    id: "dataiku",
    name: "Dataiku",
    description: "End-to-end platform for building and deploying AI and machine learning solutions.",
    category: "Data Analysis & AI Research",
    pricing: "Paid",
    rating: 4.5,
    features: [
      "ML model building",
      "Collaborative workspace",
      "AutoML capabilities",
      "Production deployment"
    ],
    link: "https://dataiku.com",
    detailedDescription: "Dataiku provides a collaborative platform for data science teams to build and deploy AI solutions."
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "AI copywriting tool for creating marketing content, emails, and social media posts.",
    category: "Content Creation",
    pricing: "Freemium",
    rating: 4.5,
    features: [
      "90+ copywriting tools",
      "Multiple languages",
      "Brand voice",
      "Blog post workflow"
    ],
    link: "https://copy.ai",
    detailedDescription: "Copy.ai helps marketers and writers create compelling copy quickly with AI assistance."
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    description: "Collaborative browser-based IDE with AI pair programming capabilities.",
    category: "Coding & Development",
    pricing: "Freemium",
    rating: 4.3,
    features: [
      "Real-time collaboration",
      "AI code suggestions",
      "Instant deployment",
      "Multiple languages"
    ],
    link: "https://replit.com",
    detailedDescription: "Replit combines a powerful online IDE with AI-powered coding assistance."
  },
  {
    id: "Writesonic",
    name: "Writesonic AI",
    description: "Offers AI-generated content for blogs, landing pages, and product descriptions",
    category: "Content Creation",
    pricing: "Free & Paid",
    rating: 4.6,
    features: [
      "Generates blog posts, emails, social media content, and more",
      "Offers templates for various writing needs",
      "Supports multiple languages",
      "Integrates with Surfer SEO for optimized content"
    ],
    link: "https://www.writesonic.com",
    detailedDescription: " Writesonic Offers AI-generated content for blogs, landing pages, and product descriptions"
  },{
    id: "SurferSEO",
    name: "Surfer SEO",
    description: "Optimizes content for search engines using AI-driven insights and recommendations",
    category: "Content Creation",
    pricing: "Paid",
    rating: 4.7,
    features: [
      "Analyzes top-ranking pages for keyword optimization",
      "Provides content editor for real-time optimization",
      "Offers audit tool to identify SEO issues",
      "Integrates with Jasper for content creation"
    ],
    link: "https://www.surferseo.com",
    detailedDescription: "Surfer SEO is an AI-powered tool that helps businesses optimize their content for search engines."
  },
  {
    id: "Grammarly",
    name: "Grammarly",
    description: "Provides grammar, spelling, and style suggestions to enhance writing clarity",
    category: "Content Creation",
    pricing: "Free & Paid",
    rating: 4.8,
    features: [
      "Checks for grammar, spelling, and punctuation errors",
      "Offers style and tone suggestions",
      "Detects plagiarism",
      "Provides writing insights and performance statistics"
    ],
    link: "https://www.grammarly.com",
    detailedDescription: "Grammarly is an AI-powered writing assistant that helps users write clear, mistake-free content."
  },
  {
    id: "DALL·E 2",
    name: "DALL·E 2",
    description: "Generates images from textual descriptions, capable of inpainting and editing images.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.8,
    features: [
      "Image generation from text prompts",
      "Inpainting and image editing",
      "High-resolution image output",
      "Creative image variations"
    ],
    link: "https://openai.com/dall-e-2",
    detailedDescription: "DALL·E 2 by OpenAI is an AI system that creates realistic images and art from a description in natural language."
  },
  {
    id: "Canva Magic Design",
    name: "Canva Magic Design",
    description: "AI-powered design tool that auto-generates templates based on user input.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.7,
    features: [
      "Auto-generates design templates",
      "Customizable design elements",
      "User-friendly interface",
      "Extensive design library"
    ],
    link: "https://www.canva.com/magic-design/",
    detailedDescription: "Canva Magic Design is a free AI design tool that auto-generates designs based on your text and media."
  },
  {
    id: "Runway ML",
    name: "Runway ML",
    description: "Offers AI tools for video editing, image generation, and real-time collaboration.",
    category: "Design & Graphics",
    pricing: "Paid",
    rating: 4.6,
    features: [
      "Real-time video editing",
      "AI-powered image generation",
      "Collaborative workspace",
      "Supports multiple media formats"
    ],
    link: "https://runwayml.com",
    detailedDescription: "Runway ML provides AI-powered tools for creatives to generate and edit images and videos."
  },
  {
    id: "Fotor AI",
    name: "Fotor AI",
    description: "AI-based photo editing tool with features like background remover and image enhancer.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.5,
    features: [
      "Background remover",
      "Image enhancement tools",
      "AI portrait retouching",
      "Collage maker"
    ],
    link: "https://www.fotor.com/features/ai-image-generator/",
    detailedDescription: "Fotor AI offers a suite of AI-powered tools for photo editing and enhancement."
  },
  {
    id: "Deep Dream Generator",
    name: "Deep Dream Generator",
    description: "Transforms photos into dream-like images using neural networks.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.4,
    features: [
      "Dream-like image transformation",
      "Multiple art styles",
      "High-resolution output",
      "Community sharing platform"
    ],
    link: "https://deepdreamgenerator.com",
    detailedDescription: "Deep Dream Generator uses neural networks to turn your photos into surreal, dream-like images."
  },
  {
    id: "Artbreeder",
    name: "Artbreeder",
    description: "Generates and evolves images using AI, allowing users to blend and modify images.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.3,
    features: [
      "Image blending and evolution",
      "High-quality image output",
      "User-friendly interface",
      "Community-driven content"
    ],
    link: "https://www.artbreeder.com",
    detailedDescription: "Artbreeder is a platform that uses AI to create and evolve images through blending and modification."
  },
  {
    id: "Designify",
    name: "Designify",
    description: "AI tool that automatically removes backgrounds and enhances product images.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.2,
    features: [
      "Background removal",
      "Image enhancement",
      "Batch processing",
      "User-friendly interface"
    ],
    link: "https://www.designify.com",
    detailedDescription: "Designify uses AI to automatically remove backgrounds and enhance product images."
  },
  {
    id: "Crello",
    name: "Crello",
    description: "Design tool with AI-powered features for creating animated and static visuals.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.1,
    features: [
      "Animated and static visuals",
      "AI-powered design suggestions",
      "Extensive template library",
      "User-friendly interface"
    ],
    link: "https://crello.com",
    detailedDescription: "Crello is a design tool that offers AI-powered features for creating animated and static visuals."
  },
  {
    id: "Remove.bg",
    name: "Remove.bg",
    description: "AI-powered background removal tool for images.",
    category: "Design & Graphics",
    pricing: "Free & Paid",
    rating: 4.0,
    features: [
      "Background removal",
      "High-resolution output",
      "Batch processing",
      "User-friendly interface"
    ],
    link: "https://www.remove.bg",
    detailedDescription: "Remove.bg is an AI-powered tool that removes backgrounds from images automatically."
  },
   {
    id: "NotionAI",
    name: "Notion AI",
    description: "AI assistant integrated with Notion to improve note-taking, writing, and project management.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.7,
    features: [
      "Generates summaries and meeting notes",
      "Helps with task management",
      "Content suggestions and writing assistance",
      "Integrates with Notion workspace"
    ],
    link: "https://www.notion.so/product/ai",
    detailedDescription: "Notion AI enhances productivity by assisting with writing, note-taking, and project management."
  },
  {
    id: "Otter.ai",
    name: "Otter AI",
    description: "AI transcription service for meetings, lectures, and conversations.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.6,
    features: [
      "Real-time transcription",
      "Speaker identification",
      "Export and share transcripts",
      "Integration with Zoom and other platforms"
    ],
    link: "https://otter.ai",
    detailedDescription: "Otter AI uses AI to provide accurate transcriptions of meetings, lectures, and conversations."
  },
  {
    id: "Zapier",
    name: "Zapier",
    description: "Automates repetitive tasks by connecting apps and creating workflows.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.5,
    features: [
      "Automates workflows between apps",
      "Supports 5000+ app integrations",
      "No coding required",
      "Customizable automation triggers"
    ],
    link: "https://zapier.com",
    detailedDescription: "Zapier automates workflows to save time and increase productivity by connecting your favorite apps."
  },
  {
    id: "Microsoft Power Automate",
    name: "Microsoft Power Automate",
    description: "Helps automate repetitive tasks across Microsoft and other apps using AI.",
    category: "Productivity & Automation",
    pricing: "Paid",
    rating: 4.6,
    features: [
      "Automates repetitive workflows",
      "Supports Microsoft ecosystem",
      "AI-powered process recommendations",
      "Customizable triggers and actions"
    ],
    link: "https://flow.microsoft.com",
    detailedDescription: "Microsoft Power Automate allows users to automate repetitive tasks across apps with AI assistance."
  },
  {
    id: "Trello Butler",
    name: "Trello Butler",
    description: "AI automation tool integrated with Trello for managing boards and tasks efficiently.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.5,
    features: [
      "Automates board and card actions",
      "Custom command creation",
      "Reduces manual work",
      "Integrates with Trello boards"
    ],
    link: "https://trello.com/butler",
    detailedDescription: "Trello Butler automates Trello boards by performing repetitive tasks using customizable rules."
  },
  {
    id: "x.ai",
    name: "x.ai",
    description: "AI scheduling assistant that schedules meetings automatically.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.4,
    features: [
      "Schedules meetings automatically",
      "Integrates with calendars",
      "Sends automated reminders",
      "Supports multiple time zones"
    ],
    link: "https://x.ai",
    detailedDescription: "x.ai automates meeting scheduling by coordinating availability and sending calendar invites."
  },
  {
    id: "Clockwise",
    name: "Clockwise",
    description: "AI-powered calendar assistant to optimize your schedule.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.3,
    features: [
      "Automatically schedules meetings",
      "Blocks focus time",
      "Optimizes calendar efficiency",
      "Integrates with Google Calendar"
    ],
    link: "https://www.getclockwise.com",
    detailedDescription: "Clockwise uses AI to optimize your calendar, schedule meetings efficiently, and create focus time."
  },
  {
    id: "Grain",
    name: "Grain",
    description: "Records, transcribes, and highlights important parts of meetings using AI.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.5,
    features: [
      "Meeting recording and transcription",
      "Highlights and summary generation",
      "Easy sharing of notes",
      "Integrates with Zoom"
    ],
    link: "https://grain.co",
    detailedDescription: "Grain captures important moments in meetings, transcribes them, and allows sharing highlights with your team."
  },
  {
    id: "Fireflies.ai",
    name: "Fireflies AI",
    description: "AI meeting assistant that records, transcribes, and analyzes conversations.",
    category: "Productivity & Automation",
    pricing: "Free & Paid",
    rating: 4.4,
    features: [
      "AI meeting transcription",
      "Automated note generation",
      "Searchable conversation history",
      "Integrates with Zoom, Teams, and Google Meet"
    ],
    link: "https://fireflies.ai",
    detailedDescription: "Fireflies AI helps teams capture, transcribe, and analyze meetings for better productivity."
  },
  {
    id: "Superhuman AI",
    name: "Superhuman AI",
    description: "AI-powered email assistant that prioritizes, summarizes, and manages your inbox efficiently.",
    category: "Productivity & Automation",
    pricing: "Paid",
    rating: 4.5,
    features: [
      "Email prioritization",
      "AI email summaries",
      "Keyboard shortcuts for efficiency",
      "Integrates with Gmail and Outlook"
    ],
    link: "https://superhuman.com",
    detailedDescription: "Superhuman AI uses AI to manage your inbox efficiently, prioritize important messages, and provide summaries."
  },
   {
    id: "HubSpot AI",
    name: "HubSpot AI",
    description: "AI-powered CRM and marketing platform for automating customer engagement and lead management.",
    category: "Business & Marketing",
    pricing: "Free & Paid",
    rating: 4.7,
    features: [
      "Automates email campaigns",
      "Lead scoring and management",
      "Chatbot and customer engagement",
      "Analytics and reporting dashboards"
    ],
    link: "https://www.hubspot.com",
    detailedDescription: "HubSpot AI helps businesses automate marketing, sales, and customer support workflows."
  },
  {
    id: "Salesforce Einstein",
    name: "Salesforce Einstein",
    description: "AI platform integrated with Salesforce for predictive analytics and marketing automation.",
    category: "Business & Marketing",
    pricing: "Paid",
    rating: 4.6,
    features: [
      "Predictive lead scoring",
      "Marketing automation",
      "AI-driven insights for sales",
      "Customizable dashboards"
    ],
    link: "https://www.salesforce.com/products/einstein/overview/",
    detailedDescription: "Salesforce Einstein provides AI-powered analytics and automation for sales, marketing, and customer support."
  },
  {
    id: "Marketo Engage",
    name: "Marketo Engage",
    description: "Marketing automation platform with AI features for email campaigns, lead nurturing, and analytics.",
    category: "Business & Marketing",
    pricing: "Paid",
    rating: 4.5,
    features: [
      "Automates email and marketing campaigns",
      "Lead scoring and nurturing",
      "AI-powered engagement insights",
      "Integrates with CRM systems"
    ],
    link: "https://www.marketo.com",
    detailedDescription: "Marketo Engage helps businesses automate marketing campaigns and generate insights using AI."
  },
  {
    id: "Drift AI",
    name: "Drift AI",
    description: "AI-powered chatbot and conversational marketing platform for generating leads and engaging visitors.",
    category: "Business & Marketing",
    pricing: "Free & Paid",
    rating: 4.6,
    features: [
      "AI chatbot for websites",
      "Lead generation automation",
      "Real-time visitor engagement",
      "Integrates with CRM and marketing tools"
    ],
    link: "https://www.drift.com",
    detailedDescription: "Drift AI uses conversational AI to engage website visitors and generate leads automatically."
  },
  {
    id: "Phrasee",
    name: "Phrasee",
    description: "AI platform for generating optimized marketing copy for email, social media, and ads.",
    category: "Business & Marketing",
    pricing: "Paid",
    rating: 4.4,
    features: [
      "AI-generated marketing copy",
      "Optimized subject lines and ad text",
      "A/B testing for campaigns",
      "Supports multiple languages"
    ],
    link: "https://phrasee.co",
    detailedDescription: "Phrasee uses AI to generate high-performing marketing copy for emails, ads, and social media."
  },
  {
    id: "Crayon",
    name: "Crayon",
    description: "Competitive intelligence platform with AI-powered market and competitor analysis.",
    category: "Business & Marketing",
    pricing: "Paid",
    rating: 4.3,
    features: [
      "Monitors competitor activity",
      "Market intelligence dashboards",
      "AI-powered trend analysis",
      "Customizable alerts"
    ],
    link: "https://www.crayon.co",
    detailedDescription: "Crayon helps businesses track competitors and market trends using AI-powered analytics."
  },
  {
    id: "Lately AI",
    name: "Lately AI",
    description: "AI social media marketing tool that generates content and schedules posts automatically.",
    category: "Business & Marketing",
    pricing: "Paid",
    rating: 4.4,
    features: [
      "Generates social media content",
      "Schedules posts automatically",
      "Analyzes engagement metrics",
      "Supports multiple social platforms"
    ],
    link: "https://www.lately.ai",
    detailedDescription: "Lately AI helps businesses create and schedule social media content automatically using AI."
  },
  {
    id: "Seventh Sense",
    name: "Seventh Sense",
    description: "AI-powered email delivery optimization tool for marketing campaigns.",
    category: "Business & Marketing",
    pricing: "Paid",
    rating: 4.5,
    features: [
      "Optimizes email send times",
      "AI-driven engagement analysis",
      "Integrates with marketing automation tools",
      "Improves campaign open rates"
    ],
    link: "https://www.theseventhsense.com",
    detailedDescription: "Seventh Sense uses AI to optimize email delivery times and improve engagement for marketing campaigns."
  },
  {
    id: "Persado",
    name: "Persado",
    description: "AI platform for generating persuasive marketing language and copy for campaigns.",
    category: "Business & Marketing",
    pricing: "Paid",
    rating: 4.4,
    features: [
      "Generates AI-optimized marketing copy",
      "Supports multiple channels: email, social, web",
      "A/B testing for messaging",
      "AI insights on language impact"
    ],
    link: "https://www.persado.com",
    detailedDescription: "Persado uses AI to generate persuasive marketing messages and optimize campaign performance."
  },
  {
    id: "Zoho CRM AI",
    name: "Zoho CRM AI",
    description: "AI-powered CRM platform for sales forecasting, lead prioritization, and automation.",
    category: "Business & Marketing",
    pricing: "Free & Paid",
    rating: 4.5,
    features: [
      "AI-based lead scoring",
      "Sales forecasting and automation",
      "Email sentiment analysis",
      "Customizable dashboards"
    ],
    link: "https://www.zoho.com/crm",
    detailedDescription: "Zoho CRM AI enhances customer relationship management with AI-powered insights and automation."
  },
  
  {
    id: "ChatGPT",
    name: "ChatGPT",
    description: "Conversational AI that can answer questions, summarize data, and provide insights.",
    category: "Data Analysis & AI Research",
    pricing: "Free & Paid",
    rating: 4.8,
    features: [
      "Natural language Q&A",
      "Summarizes documents",
      "Generates insights from data",
      "Integrates with APIs for custom applications"
    ],
    link: "https://chat.openai.com",
    detailedDescription: "ChatGPT is an AI chatbot capable of providing answers, summarizing data, and generating insights in natural language."
  },
  {
    id: "Perplexity AI",
    name: "Perplexity AI",
    description: "AI-powered search engine that provides answers with sources and references.",
    category: "Data Analysis & AI Research",
    pricing: "Free",
    rating: 4.6,
    features: [
      "Provides AI-driven answers",
      "Includes sources and references",
      "Fast search results",
      "User-friendly interface"
    ],
    link: "https://www.perplexity.ai",
    detailedDescription: "Perplexity AI is an AI search tool that provides accurate answers along with source references."
  },
  {
    id: "You.com",
    name: "You.com",
    description: "AI-powered search engine that personalizes search results and summaries.",
    category: "Data Analysis & AI Research",
    pricing: "Free",
    rating: 4.5,
    features: [
      "Customizable search experience",
      "AI-generated summaries",
      "Privacy-focused search",
      "Integrates apps within search results"
    ],
    link: "https://you.com",
    detailedDescription: "You.com provides AI-assisted search results with summaries and personalized content recommendations."
  },
  {
    id: "DataRobot",
    name: "DataRobot",
    description: "AI platform for automated machine learning and predictive analytics.",
    category: "Data Analysis & AI Research",
    pricing: "Paid",
    rating: 4.7,
    features: [
      "Automated ML model creation",
      "Data preprocessing and cleaning",
      "Predictive analytics dashboards",
      "Integrates with various data sources"
    ],
    link: "https://www.datarobot.com",
    detailedDescription: "DataRobot automates the machine learning process to deliver predictive analytics and insights from data."
  },
  {
    id: "Tableau AI",
    name: "Tableau AI",
    description: "AI-powered analytics and visualization tool for insights from complex data.",
    category: "Data Analysis & AI Research",
    pricing: "Paid",
    rating: 4.6,
    features: [
      "Data visualization",
      "AI-assisted insights",
      "Dashboard creation",
      "Integration with multiple data sources"
    ],
    link: "https://www.tableau.com",
    detailedDescription: "Tableau AI helps organizations analyze data and generate visual insights efficiently."
  },
  {
    id: "MonkeyLearn",
    name: "MonkeyLearn",
    description: "AI platform for text analysis, sentiment analysis, and data classification.",
    category: "Data Analysis & AI Research",
    pricing: "Free & Paid",
    rating: 4.5,
    features: [
      "Text classification",
      "Sentiment analysis",
      "Custom machine learning models",
      "Integrates with business tools"
    ],
    link: "https://monkeylearn.com",
    detailedDescription: "MonkeyLearn uses AI to analyze and classify text, perform sentiment analysis, and extract insights."
  },
  {
    id: "Power BI AI",
    name: "Power BI AI",
    description: "Microsoft’s analytics platform with AI capabilities for data visualization and insights.",
    category: "Data Analysis & AI Research",
    pricing: "Paid",
    rating: 4.6,
    features: [
      "Data visualization and dashboards",
      "AI-powered insights",
      "Integration with Microsoft ecosystem",
      "Customizable analytics models"
    ],
    link: "https://powerbi.microsoft.com",
    detailedDescription: "Power BI AI provides AI-driven insights and visualizations to make data analysis easier and faster."
  },
  {
    id: "Zoho Analytics AI",
    name: "Zoho Analytics AI",
    description: "AI-powered business intelligence platform for data visualization and reporting.",
    category: "Data Analysis & AI Research",
    pricing: "Free & Paid",
    rating: 4.4,
    features: [
      "Automated insights",
      "Data visualization",
      "Reports and dashboards",
      "Integrates with Zoho apps and external sources"
    ],
    link: "https://www.zoho.com/analytics",
    detailedDescription: "Zoho Analytics AI provides automated insights and powerful visualizations to help businesses make informed decisions."
  },
  {
    id: "Cogram",
    name: "Cogram",
    description: "AI assistant for data scientists to write code and analyze datasets quickly.",
    category: "Data Analysis & AI Research",
    pricing: "Free & Paid",
    rating: 4.3,
    features: [
      "Generates code from natural language",
      "Supports Python and SQL",
      "Automates data analysis tasks",
      "Integrates with Jupyter notebooks"
    ],
    link: "https://www.cogram.com",
    detailedDescription: "Cogram assists data scientists with AI-generated code for faster data analysis and modeling."
  },
  {
    id: "Elicit",
    name: "Elicit",
    description: "AI research assistant for literature reviews, data extraction, and analysis.",
    category: "Data Analysis & AI Research",
    pricing: "Free",
    rating: 4.5,
    features: [
      "Literature search and review",
      "Data extraction and summarization",
      "Research assistance",
      "AI-driven insights"
    ],
    link: "https://elicit.org",
    detailedDescription: "Elicit helps researchers conduct literature reviews and extract insights using AI-powered automation."
  },



];

export const categories = [
  {
    name: "Content Creation",
    description: "AI tools for writing, video, and content generation",
    count: toolsData.filter(t => t.category === "Content Creation").length
  },
  {
    name: "Coding & Development",
    description: "AI-powered coding assistants and development tools",
    count: toolsData.filter(t => t.category === "Coding & Development").length
  },
  {
    name: "Design & Graphics",
    description: "AI tools for design, image generation, and editing",
    count: toolsData.filter(t => t.category === "Design & Graphics").length
  },
  {
    name: "Productivity & Automation",
    description: "Tools to automate workflows and boost productivity",
    count: toolsData.filter(t => t.category === "Productivity & Automation").length
  },
  {
    name: "Data Analysis & AI Research",
    description: "Advanced analytics and machine learning platforms",
    count: toolsData.filter(t => t.category === "Data Analysis & AI Research").length
  },
  {
    name: "Business & Marketing",
    description: "AI solutions for business operations and marketing",
    count: 1
  }
];
