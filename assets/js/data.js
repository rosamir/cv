/**
 * Amir Rosen - Executive CV & Portfolio Data Store
 * All CV contents, media links, and metadata
 */

const CV_DATA = {
  personal: {
    name: "אמיר רוזן",
    englishName: "Amir Rosen",
    title: "מנהל המחבר בין עסק, טכנולוגיה, דאטה ואנשים | הובלת חדשנות, טרנספורמציה דיגיטלית ו-AI - מגיבוש אסטרטגיה עסקית וטכנולוגית דרך יישום בפועל והובלת שינוי ארגוני ועד אימוץ והשפעה עסקית",
    tagline: "מנהל בעל ראייה אסטרטגית רחבה, מומחיות עמוקה ב-AI, ענן, דיגיטל ו-Omnichannel, וניסיון מוכח בהובלת שינויים ארגוניים מורכבים וחיבור ישיר בין טכנולוגיה מתקדמת לערך עסקי וצמיחה.",
    phone: "054-2435566",
    email: "ros.amir@gmail.com",
    location: "ישראל",
    linkedin: "https://www.linkedin.com/in/amir-rosen/",
    linkedinActivity: "https://www.linkedin.com/in/amir-rosen/recent-activity/all/",
    whatsappMessage: "שלום אמיר, הגעתי דרך אתר קורות החיים המנהלי שלך ואשמח לשוחח בנוגע להזדמנות מובילה.",
    summaryBullets: [
      "מעל 20 שנים של ניסיון עשיר בתחום מערכות המידע, הטכנולוגיות והחדשנות במגוון סקטורים מובילים (בנקאות ופיננסים, ביטוח, Retail ואופנה גבוהה, טלקום, בריאות והייטק).",
      "מנהל בעל ניסיון רב בניהול יחידות עסקיות וטכנולוגיות בהיקפי ענק (P&L של עשרות מיליוני שקלים, מאות עובדים וספקים גלובליים). היכרות מלאה ועמוקה עם כלל הספקטרום הטכנולוגי (תשתיות, פיתוח, דיגיטל, חדשנות, דאטה, AI/ML, ענן וסייבר).",
      "ידע טכני מעמיק כולל Hands-on, חיבור הדוק בין פתרונות טכנולוגיים מתקדמים לצרכים עסקיים, שיפור ביצועים וחוויית לקוח יוצאת דופן.",
      "ראייה רחבה וניסיון מוכח בניהול והובלת פרויקטים אסטרטגיים ומורכבים מקצה לקצה במתודולוגיות מגוונות המותאמות לאופי הארגון והפרויקט.",
      "הובלת מרכז ה-AI של בנק לאומי בכפיפות ישירה למנכ״ל, דירוג הבנק במקום ה-1 בישראל באימוץ AI (מדד Evident AI 2026).",
      "הקמה וניהול של קרן הון סיכון תאגידית (Irani Ventures) וליווי עשרות סטארטאפים הן בצד הטכנולוגי והן בצד העסקי."
    ],
    stats: [
      { id: "evident", value: "#1", label: "באימוץ AI בישראל", sublabel: "בנק לאומי לפי מדד Evident AI 2026", icon: "award" },
      { id: "exp", value: "20+", label: "שנות ניסיון ניהולי", sublabel: "בהייטק, בנקאות, ריטייל וביטחון", icon: "briefcase" },
      { id: "chat", value: "10%", label: "ירידה בפניות בנקאיות", sublabel: "בזכות פריסת צ'אט AI לכלל לקוחות לאומי", icon: "trending-down" },
      { id: "accuracy", value: "95%", label: "ירידה בשגיאות תיעוד", sublabel: "ו-15%-20% קיצור זמני טיפול באמצעות AI", icon: "check-circle" },
      { id: "budget", value: "30M+ ₪", label: "ניהול תקציבים שנתיים", sublabel: "ניהול יחידות P&L והסכמי ענק גלובליים", icon: "bar-chart-3" },
      { id: "awards", value: "3x", label: "פרסי הצטיינות יוקרתיים", sublabel: "2x מצטיין ראש אמ״ן + פרס מצטיין המחשוב IT Awards", icon: "trophy" }
    ],
    personalStory: {
      title: "האדם שמאחורי המנהיגות הטכנולוגית",
      subtitle: "ערכים, משפחה, מצוינות ותשוקה ליצירת אימפקט",
      image: "assets/images/family.webp",
      imageAlt: "אמיר רוזן ומשפחתו",
      paragraphs: [
        "אני מנהל עם גישה אנושית בגובה העיניים, חיבור עמוק לצוותים, העצמת מנהלים ויצירת סביבה שבה חדשנות ויצירתיות יכולות לשגשג.",
        "המשפחה שלי היא הכוח שמאחוריי וזו שמאפשרת לי להוביל מהלכים בקנה מידה כזה, לקבל החלטות אסטרטגיות מורכבות תחת לחץ ולשמור תמיד על חדות, אנושיות ואופטימיות.",
        "במקביל לעשייה הניהולית והטכנולוגית, אני רואה שליחות גדולה בתרומה לקהילה ובהעברת ידע וטיפוח דור העתיד."
      ]
    }
  },

  experience: [
    {
      id: "leumi-caio",
      period: "2026 - היום",
      role: "Chief AI Officer (CAIO)",
      company: "בנק לאומי",
      companyType: "בנקאות, פיננסים וטכנולוגיה",
      badge: "תפקיד נוכחי | C-Level",
      category: "ai",
      directReport: "בכפיפות ישירה למנכ״ל הבנק",
      shortSummary: "הקמה והובלה של מרכז ה-AI של בנק לאומי, גיבוש אסטרטגיית AI ארגונית הוליסטית, גיבוש תהליכי עבודה והקמת פורומים שונים כולל AI Board בראשות המנכ״ל, והובלת טרנספורמציית Generative & Agentic AI בכלל זרועות הבנק שהובילה בין השאר לדירוג לאומי במקום ה-1 בישראל באימוץ AI (מדד Evident AI) וליחס היעילות הטוב במערכת הבנקאית בארץ.",
      bullets: [
        "הקמה והובלה של מרכז ה-AI של בנק לאומי, בכפיפות ישירה למנכ״ל, וגיבוש והוצאה לפועל של אסטרטגיית AI ארגונית המשלבת יעדים עסקיים, טכנולוגיה, דאטה, תהליכים, אנשים, ניהול שינוי וממשל.",
        "הובלת טרנספורמציית AI הוליסטית בכלל הבנק והקמת מודל הפעלה ומנגנוני Governance חוצי-ארגון, לרבות AI Board בראשות מנכ״ל הבנק ועבודה שוטפת עם הנהלה בכירה, יחידות עסקיות, טכנולוגיה, דאטה, סייבר, סיכונים, משפטית, משאבי אנוש וכספים.",
        "הובלת פורטפוליו רחב של יוזמות AI, Generative AI ו-Agentic AI לעובדים, בנקאים ולקוחות, ובהן AI-Driven SDLC, Microsoft Copilot, סוכנים חכמים, פתרונות AI לשירות ומכירה, תמלול וניתוח שיחות, ניהול ידע ואוטומציה של תהליכים עסקיים.",
        "אחריות End-to-End על מעבר מרעיון לערך עסקי - איתור ותיעדוף Use Cases, בניית Business Case, בחירת פתרון ושותפים, פיתוח והטמעה, מעבר מפיילוט לייצור, מדידת KPI/ROI והרחבה בקנה מידה ארגוני.",
        "יצירת השפעה עסקית ותפעולית מדידה: למשל פריסת צ׳אט AI לכלל לקוחות הבנק בדיגיטל עם ירידה של כ-15% בפניות הכתובות לבנקאי ללא עלייה בהיקף השיחות למוקד; פתרונות תמלול ו-AI שהביאו לקיצור של כ-15%-20% בזמני טיפול ולירידה של כ-95% בשגיאות תיעוד; והובלת AI-Driven SDLC עם יעד של כ-20% שיפור בתהליך הפיתוח.",
        "הובלת שינוי ארגוני ותרבותי והטמעת AI כחלק משיטות העבודה השוטפות, לרבות הקמת קהילת AI Leads, הכשרות, הנגשת כלים לעובדים ובניית מנגנוני אימוץ ומדידה.",
        "הכרה חיצונית בטרנספורמציה: ב-2026 דורג בנק לאומי על ידי Evident AI במקום הראשון בישראל באימוץ AI, במקום השני במזרח התיכון ואפריקה בתחום החדשנות ובמקום השמיני בדירוג ה-AI הכולל באזור."
      ],
      tags: ["Chief AI Officer", "Generative AI", "Agentic AI", "AI Governance", "AI Board", "Evident AI #1", "ROI & Impact", "AI SDLC", "Copilot"],
      links: [
        {
          url: "https://www.themarker.com/markets/2025-12-22/ty-article/.premium/0000019b-45e9-d41d-adfb-75ff0c060000",
          title: "TheMarker: מהפכת ה-AI מגיעה ללאומי – אמיר רוזן יעמוד בראש מרכז ה-AI",
          desc: "לאומי מקים מרכז AI בכפיפות למטה המנכ״ל. בראש המרכז יעמוד אמיר רוזן להובלת אסטרטגיית ה-AI של הבנק.",
          source: "TheMarker",
          type: "press",
          badge: "כתבה בלעדית"
        },
        {
          url: "https://www.maariv.co.il/economy/israel/article-1328368",
          title: "מעריב: המדד המוביל קבע – בנק לאומי במקום הראשון בתחום ה-AI בישראל",
          desc: "אינדקס EVIDENT AI הבינלאומי דירג את לאומי כמוביל בישראל ומקום 2 במזה״ת ואפריקה בחדשנות בהובלת מרכז ה-AI.",
          source: "מעריב עסקים",
          type: "press",
          badge: "דירוג בינלאומי"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7424365418221432832/",
          title: "פוסט לינקדאין: הובלת אסטרטגיית ה-AI והסוכנים החכמים בבנק לאומי",
          desc: "תובנות מעשיות מניהול הטרנספורמציה, סוכני AI חכמים והטמעת GenAI בסביבה בנקאית רגולטורית.",
          source: "LinkedIn",
          type: "social",
          badge: "Leadership Post"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7404270826176442368/",
          title: "AI in Finance: Trust, Control & Personalization",
          desc: "תובנות על ניהול סיכוני AI, רגולציה פיננסית, שמירה על אמון הלקוחות והתאמה אישית ברמה הגבוהה ביותר.",
          source: "LinkedIn",
          type: "social",
          badge: "Article / Insight"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7348105322114265088/",
          title: "טרנספורמציה דיגיטלית ושותפויות ענן (AWS, AllCloud, Leumi)",
          desc: "האצת החדשנות בענן וב-GenAI בבנק לאומי כבסיס ליכולות מתקדמות עבור הלקוחות והבנקאים.",
          source: "LinkedIn",
          type: "social",
          badge: "Cloud & AI"
        }
      ]
    },

    {
      id: "masav-board",
      period: "2024 - 2026",
      role: "דירקטור",
      company: "מס״ב - מרכז סליקה בנקאי",
      companyType: "תשתיות פיננסיות וסליקה בנקאית",
      badge: "דירקטוריון",
      category: "finance",
      shortSummary: "כהונה כדירקטור במס״ב - מרכז סליקה בנקאי, לצד תפקידי הניהול בבנק לאומי.",
      bullets: [
        "דירקטור במס״ב - מרכז סליקה בנקאי, לצד תפקידי הניהול בבנק לאומי."
      ],
      tags: ["דירקטוריון", "תשתיות פיננסיות", "סליקה בנקאית", "Governance"]
    },

    {
      id: "leumi-channels",
      period: "2023 - 2025",
      role: "ראש אגף ערוצים, טכנו׳ שוקי הון וטכנולוגיות רוחביות",
      company: "בנק לאומי",
      companyType: "בנקאות וטכנולוגיות ליבה",
      badge: "הנהלה בכירה | אגף טכנולוגי רחב",
      category: "banking",
      shortSummary: "ניהול אגף טכנולוגי רחב ואחריות End-to-End על Product, Technology & Delivery בתחומי ה-Omnichannel, Salesforce Enterprise, טכנולוגיות שוקי הון (ליבה ודיגיטל), Contact Center ורב-ערוציות, ומערך השירותים האוטומטיים.",
      bullets: [
        "ניהול אגף טכנולוגי רחב ואחריות End-to-End על Product, Technology & Delivery בתחומים אסטרטגיים בבנק: מערך הערוצים והרב-ערוציות, Salesforce, מסעות לקוח, טכנולוגיות שוקי הון (ליבה ודיגיטל) ופלטפורמות טכנולוגיות רוחביות.",
        "אחריות כוללת על מערך ה-Omnichannel והטכנולוגיות לניהול הקשר עם לקוחות ובנקאים בכלל ערוצי השירות והמכירה - Contact Center, טלפוניה ו-CTI, ערוצים כתובים ודיגיטליים, CRM, Marketing Automation ומערכות התומכות במסעות לקוח.",
        "הובלת מהלך אסטרטגי למודרניזציה של ה-Contact Center, לרבות גיבוש תפיסת היעד הן מהיבטי תפיסת שירות ומכירה והן מהיבטים טכנולוגיים ובכלל זה הארכיטקטורה, והובלת RFP להחלפת הפלטפורמה הקיימת בפתרון CCaaS, משלב הגדרת הדרישות ובחינת החלופות ועד להיערכות למימוש.",
        "אחריות מקצה לקצה על פעילות Salesforce בבנק כפלטפורמה ארגונית אסטרטגית לתהליכי CRM, שירות ומכירה ולפעילות הבנקאים - כולל Roadmap, ארכיטקטורה, פיתוח, אינטגרציות, Delivery, הטמעה, תפעול וניהול ספקים.",
        "אחריות על כלל טכנולוגיות שוקי ההון בבנק - מערכות חדרי מסחר, פלטפורמות מסחר וקישוריות לבורסות ולגופים פיננסיים; לצד אחריות עסקית וטכנולוגית מלאה על Trade, אפליקציית המסחר בשוק ההון של הבנק, לרבות Product, חוויית לקוח, Roadmap ו-Delivery.",
        "ניהול פורטפוליו של פלטפורמות וטכנולוגיות רוחביות המשרתות חטיבות ותהליכים רבים בבנק, ובהן מערכות BPM וניהול תהליכים, כלי תיוק וארכיון, מערכת לניהול הודעות ללקוחות בערוצים השונים והחוקה ועוד.",
        "אחריות עסקית וטכנולוגית על מערך המכשירים והשירותים האוטומטיים של הבנק, לרבות כספומטים, עמדות שירות ומידע, כספות ופתרונות Self-Service 24/7.",
        "הובלת תכניות טרנספורמציה ופרויקטים מורכבים חוצי-בנק, תוך עבודה עם הנהלה בכירה וחטיבות עסקיות וטכנולוגיות, ניהול ספקים ותלויות מרובות ותרגום צרכים עסקיים לפתרונות טכנולוגיים בהיקף ארגוני."
      ],
      tags: ["Omnichannel", "Salesforce Hyperforce", "Trade App (AWS)", "CCaaS", "Contact Center", "Capital Markets", "BPM", "Self-Service 24/7"],
      links: [
        {
          url: "https://finance.walla.co.il/item/3703888",
          title: "וואלה כסף: צ'אט מבוסס AI וסורקי מניות באפליקציית Trade החדשה של לאומי",
          desc: "האפליקציה הראשונה בישראל המבוססת על תשתית הענן של AWS, המציעה חוויית מסחר מתקדמת ומותאמת אישית עם ניתוחים חכמים.",
          source: "וואלה! כסף",
          type: "press",
          badge: "השקת מוצר דגל"
        },
        {
          url: "https://www.maariv.co.il/business/tech/article-1131625",
          title: "מעריב: סיילספורס משיקה את Hyperforce בישראל – לאומי הלקוח הראשון",
          desc: "לאומי מעצים את יכולותיו הדיגיטליות מבוססות AI לצמיחה מוגברת באמצעות פלטפורמת הענן Hyperforce על גבי AWS.",
          source: "מעריב טכנולוגיה",
          type: "press",
          badge: "חדשנות ענן"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7209999276876177408/",
          title: "השקת Salesforce Hyperforce בלאומי: קפיצת מדרגה טכנולוגית",
          desc: "אינטגרציה עמוקה של Salesforce, ענן ו-AI לחוויית לקוח ובנקאי מהמתקדמות בעולם הפיננסי.",
          source: "LinkedIn",
          type: "social",
          badge: "Salesforce Cloud"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7333598700700667905/",
          title: "הובלת מצוינות וטכנולוגיות ערוצים בלאומי",
          desc: "עדכונים על תהליכי המודרניזציה ב-Omnichannel ומערכות ה-Core של ערוצי השירות והמכירה.",
          source: "LinkedIn",
          type: "social",
          badge: "Channels Tech"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7293626010468573185/",
          title: "שירות לקוחות ודיגיטל בנקאי מוביל",
          desc: "שביעות רצון לקוחות, חדשנות שירותית והובלת השוק בדיגיטל בנקאי חכם.",
          source: "LinkedIn",
          type: "social",
          badge: "Customer Experience"
        },
        {
          url: "https://www.google.com/search?q=%D7%98%D7%A8%D7%A9%D7%98%D7%A7+%D7%9E%D7%A2%D7%9C%D7%99%D7%AA+%D7%90%D7%9E%D7%99%D7%A8+%D7%A8%D7%95%D7%96%D7%9F+%D7%91%D7%A0%D7%A7+%D7%9C%D7%90%D7%95%D7%9E%D7%99",
          title: "ראיון 'טרסטק' במעלית: אמיר רוזן על טכנולוגיה וחדשנות בלאומי",
          desc: "ראיון וידאו ייחודי בפורמט Elevator Pitch על האסטרטגיה הדיגיטלית והטכנולוגית בבנק לאומי.",
          source: "Trust Tech / Google Video",
          type: "media",
          badge: "Video Interview"
        }
      ]
    },

    {
      id: "irani-ventures",
      period: "2022 - 2023",
      role: "מנכ״ל חטיבת הטכנולוגיות וקרן ההשקעות Irani Ventures",
      company: "קבוצת אירני (אלשרד / Factory 54)",
      companyType: "אופנה גבוהה, קמעונאות והשקעות הון סיכון",
      badge: "CEO & CVC Head | Board Member",
      category: "vc",
      shortSummary: "ניהול כולל של חטיבת הטכנולוגיות וקרן ההון סיכון (Irani Ventures), חבר בדירקטוריון המצומצם של הקבוצה, הובלת השקעות בסטארטאפים בתחום ה-Retail Tech, יצירת סינרגיות עסקיות ועבודה מול C-Level של מותגי יוקרה בינלאומיים.",
      bullets: [
        "אחראי על כלל ההיבטים הטכנולוגיים והתהליכיים בקבוצה בדגש על דיגיטל, דאטה וחדשנות עסקית.",
        "ניהול 3 יחידות מרכזיות: (1) מערכות מידע (2) דיגיטל ו-eCommerce (3) קרן הון סיכון להשקעות בסטארטאפים (Irani Ventures).",
        "חבר בדירקטוריון מצומצם של הקבוצה לקבלת החלטות עסקיות אסטרטגיות.",
        "מנהל קרן הון סיכון שמשקיעה בסטארטאפים בתחומים שונים בדגש על Retail בכל הספקטרום.",
        "במסגרת קרן ההשקעות, אחראי הן על ליווי בגיבוש המוצר, תהליכים עסקיים וטכנולוגיה והן על הסינרגיה לפעילות הנוכחית של החברה וקידום חדשנות והטמעת הטכנולוגיה בקבוצה.",
        "עבודה שוטפת מול ההנהלות הבכירות של קבוצות האופנה הגדולות בעולם (C-Level)."
      ],
      tags: ["CVC / Venture Capital", "Retail Tech", "Board Member", "C-Level Global Brands", "eCommerce", "Innovation", "Startup Mentoring"],
      links: [
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6911298752464965632/",
          title: "ה-CVC צומח בישראל: הקמת קרן ההשקעות Irani Ventures",
          desc: "השקת פעילות קרן ההון סיכון התאגידית להשקעות בסטארטאפים פורצי דרך בעולמות הריטייל-טק, שרשרת אספקה וקיימות.",
          source: "LinkedIn / IRANI CORP",
          type: "social",
          badge: "CVC Launch"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7053277755680915457/",
          title: "קול קורא לסטארטאפים: חדשנות, קיימות ושרשרת אספקה מעגלית",
          desc: "הזמנת יזמים וסטארטאפים מובילים לשיתוף פעולה והשקעות מטעם Irani Ventures.",
          source: "LinkedIn",
          type: "social",
          badge: "Call for Startups"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7038989210904670208/",
          title: "חיבור אסטרטגי בין סטארטאפים, ריטייל וחדשנות עסקית",
          desc: "אירועי פיץ', השקעות והטמעת טכנולוגיות סטארטאפ בפעילות הקבוצה.",
          source: "LinkedIn",
          type: "social",
          badge: "Tech & Retail"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6906947783543394304/",
          title: "שיתוף פעולה אקדמי: פקטורי 54 ואוניברסיטת רייכמן",
          desc: "הובלת שת״פ ייחודי לקידום יזמות, מחקר ופתרונות חדשניים בריטייל וטכנולוגיה.",
          source: "LinkedIn",
          type: "social",
          badge: "Academic Collab"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6940671719418281984/",
          title: "ביקור טכנולוגי וכנס בינלאומי לחדשנות ריטייל",
          desc: "מפגשי C-Level עם מנהיגי טכנולוגיה ומותגי יוקרה עולמיים.",
          source: "LinkedIn",
          type: "social",
          badge: "Global Meetings"
        }
      ]
    },

    {
      id: "irani-cio",
      period: "2017 - 2022",
      role: "סמנכ\"ל טכנולוגיות ומערכות מידע (CIO / VP Tech)",
      company: "קבוצת אירני (אלשרד / Factory 54)",
      companyType: "אופנה גבוהה, רשת חנויות ו-eCommerce",
      badge: "VP Tech / CIO | טרנספורמציה דיגיטלית",
      category: "retail",
      shortSummary: "הובלת טרנספורמציה דיגיטלית מלאה שהפכה את החברה ל-Data-Driven מבוססת AI/ML, ניהול כלל מערך התשתיות, פיתוח R&D, דאטה, eCommerce והרצאות מרכזיות בכנסים בינלאומיים.",
      bullets: [
        "גיבוש ויישום אסטרטגיית מערכות מידע וטכנולוגיות, טרנספורמציה דיגיטלית, חדשנות וחוויית לקוח.",
        "ניהול של כלל היבטי הטכנולוגיות ומערכות המידע ובכלל זה: תשתיות ואבטחת מידע, פיתוח מערכות (R&D), דאטה, דיגיטל, תפעול והטמעת מערכות פנים/חוץ ארגוניות, או\"ש ופרויקטים ותקציבים ורכש.",
        "הובלת שינוי עמוק בתפיסת ההפעלה של החברה ובכלל זה הטמעת כלים ואוטומציות רבות לתהליכים עסקיים.",
        "בתקופה זו, הטכנולוגיה הפכה הלכה למעשה לבסיס של התהליכים העסקיים בחברה כפלטפורמה לשיפור הביצועים וחוויית הלקוח.",
        "ביחד עם ההנהלה יצרנו מציאות חדשה והפכנו את החברה להיות Data Driven Company כולל יכולות וכלי AI/ML מתקדמים.",
        "הובלה של שיפור משמעותי ביציבות וזמינות התשתיות והמערכות בחברה.",
        "פיתוח של מערכות פנים ארגוניות למטרות שונות כמו אופטימיזציה ברכש, ניהול מלאי, eCommerce, אפליקציות לניהול תהליכים בחנויות ותקשורת עם המטה, אפליקציות חדשניות לקשר עם הלקוח ועוד.",
        "הטמעת טכנולוגיית Nano BLE לאוטומציה של תהליכי שרשרת אספקה, ניתוח נתונים על רצפת המכירה וכפלטפורמה לדור הבא של החנויות הדיגיטליות."
      ],
      tags: ["Data-Driven Company", "AI/ML in Retail", "IoT / Nano BLE (Wiliot)", "eCommerce", "Store Ops Apps", "Supply Chain", "Customer Journey"],
      links: [
        {
          url: "https://www.themarker.com/technation/2022-03-30/ty-article/00000180-5bbe-dee0-afd6-7bffe33d0000",
          title: "TheMarker דיגיטלפסט: ״צריך להתמקד בשירות, ולא באיך לסחוט עוד שקל מהלקוח״",
          desc: "אמיר רוזן על מהפכת הדיגיטל, הזינוק באונליין, חוויית שירות אישית וחדשנות טכנולוגית בקבוצת אירני / פקטורי 54.",
          source: "TheMarker דיגיטלפסט",
          type: "press",
          badge: "ראיון מרכזי"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6914873493704577024/",
          title: "דיגיטלפסט 2022: הרצאה מרכזית על אסטרטגיית דיגיטל ושירות",
          desc: "שיתוף תובנות מהשטח על אי-קומרס יוקרתי, חוויית לקוח מותאמת אישית וטכנולוגיה ממוקדת ערך.",
          source: "LinkedIn / Digitalfest",
          type: "social",
          badge: "Keynote Talk"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6860937126410805248/",
          title: "מחקר Coresight Research על מסע הלקוח וטכנולוגיות ריטייל מתקדמות",
          desc: "אופטימיזציית מלאי, חיבור בין האונליין לאופליין וטכנולוגיית Nano BLE ברצפת המכירה.",
          source: "Coresight Research",
          type: "media",
          badge: "Global Research"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6935822178948894720/",
          title: "הרצאה בכנס טכנולוגי: מהפכת הדאטה וה-IoT בריטייל",
          desc: "תובנות מעשיות מהטמעת חיישנים חכמים, ניתוח נתונים בזמן אמת וקבלת החלטות מבוססת דאטה.",
          source: "LinkedIn",
          type: "social",
          badge: "Tech Lecture"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6878595464929796097/",
          title: "חדשנות טכנולוגית וחוויית לקוח בפקטורי 54",
          desc: "הטמעת טכנולוגיות מתקדמות וחוויית קנייה ייחודית בעולם האופנה הגבוהה.",
          source: "LinkedIn",
          type: "social",
          badge: "Innovation Showcase"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6939894548789608448/",
          title: "פאנל מנהיגות טכנולוגית וטרנספורמציה דיגיטלית",
          desc: "הצגת מקרי בוחן של חדשנות ופתרונות R&D פנים-ארגוניים בפקטורי 54.",
          source: "LinkedIn",
          type: "social",
          badge: "Panel Speaker"
        },
        {
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6935516566138560512/",
          title: "הובלת חדשנות ויזמות בריטייל",
          desc: "פוסט מקצועי על טכנולוגיות ריטייל, מגמות שוק והשקעות.",
          source: "LinkedIn",
          type: "social",
          badge: "Industry Thought"
        }
      ]
    },

    {
      id: "menora",
      period: "2015 - 2017",
      role: "מנהל מחלקת תשתיות אפליקטיביות",
      company: "מנורה מבטחים",
      companyType: "ביטוח, פנסיה ופיננסים",
      badge: "ניהול מחלקה | תקציבי ענק",
      category: "finance",
      shortSummary: "הובלת מערך פעילות מערכות המידע והטכנולוגיות המרכזיות בארגון, פיתוח ואינטגרציה בין מערכות ליבה, בסיסי נתונים, פתרונות Omni Channel וניהול תקציב של עשרות מיליוני שקלים.",
      bullets: [
        "הובלת מערך פעילות מערכות המידע והטכנולוגיות המרכזיות בארגון ביניהן פיתוח ואינטגרציה בין מערכות, בסיסי נתונים ותשתיות אפליקטיביות.",
        "אפיון, פיתוח, יישום והטמעת מערכות טכנולוגיות מתקדמות בתחומים שונים ביניהם חוויית לקוח וערוצים דיגיטליים - Omni Channel.",
        "ניהול תקציב של מאות מיליוני ש\"ח, הובלת מו\"מ וחוזים מול ספקים גדולים."
      ],
      tags: ["Insurance & Pension", "Application Infrastructure", "Core Integration", "Omni Channel", "Database Systems", "Vendor Negotiations"]
    },

    {
      id: "allcloud",
      period: "2015 - 2015",
      role: "סמנכ\"ל מוצרים (Chief Product Officer - CPO)",
      company: "חברת AllCloud",
      companyType: "שירותי ענן, אינטגרציה וחדשנות טכנולוגית",
      badge: "C-Level | Product & Cloud Strategy",
      category: "cloud",
      shortSummary: "ניהול כל קו המוצרים והפתרונות של החברה, פיתוח אסטרטגיה עסקית, תכניות צמיחה מוכוונות חדשנות, והובלת תהליכי שיווק, מכירה והטמעה של פתרונות ענן מתקדמים.",
      bullets: [
        "שותף בצוות ההקמה שעיצב את החברה, פעילותה והכיוון העסקי מראשיתה.",
        "ניהול כל קו המוצרים והפתרונות של החברה בכלל זה הטכנולוגיה, תהליכי השיווק, המכירה, ההטמעה והשירות שלהם.",
        "גיבוש פתרונות טכנולוגיים מתקדמים.",
        "פיתוח אסטרטגיה, תכניות עסקיות ומנועי צמיחה מוכווני חדשנות."
      ],
      tags: ["Chief Product Officer", "Cloud Products", "Growth Engines", "Product Strategy", "Go-To-Market"]
    },

    {
      id: "yael",
      period: "2013 - 2015",
      role: "מנהל אגף חדשנות עסקית ופתרונות ענן",
      company: "קבוצת יעל תוכנה (Yael Group)",
      companyType: "קבוצת IT ואינטגרציה מובילה בישראל",
      badge: "P&L 20M ₪ | Cloud Innovation",
      category: "cloud",
      shortSummary: "ניהול יחידה עסקית מקצה לקצה (P&L של כ-20 מיליון ₪ בשנה), הקמת פעילות הענן בחברה, שיתופי פעולה אסטרטגיים עם Google ו-Salesforce, ופתרונות מותאמים ללקוחות ענק במשק.",
      bullets: [
        "ניהול יחידה עסקית מקצה לקצה, P&L, בהיקף מחזור מכירות של עשרות מיליוני ₪ בשנה.",
        "הובלת תחום הפיתוח העסקי, שיווק ומכירות, פיתוח (R&D), הטמעה, Delivery ושירות ותמיכה.",
        "יצירת פתרונות טכנולוגיים מותאמים ללקוחות מסוגים שונים לדוגמה: YES, שירותי בריאות כללית, שב\"ס, בנק יהב, משרד הבריאות וחברות הייטק.",
        "יישומים טכנולוגיים בארגונים: CRM, מערכות לוגיסטיות, מובייל, Output Management, ניהול תורים.",
        "הקמת פעילות הענן בחברה וגיבוש eco system מלא ללקוחות (תשתיות ויישומים).",
        "שיתוף פעולה עם ספקים גלובאליים מובילים בעולם כמו Google ו-Salesforce."
      ],
      tags: ["P&L 20M NIS", "Cloud Ecosystem", "Google & Salesforce Partner", "Enterprise Customers", "Business Development", "R&D & Delivery"],
      links: [
        {
          url: "https://www.new-techonline.com/2014/06/%D7%94%D7%A1%D7%9B%D7%9D-%D7%97%D7%A9%D7%95%D7%91-%D7%9C%D7%99%D7%A2%D7%9C-%D7%AA%D7%95%D7%9B%D7%A0%D7%94-%D7%91%D7%AA%D7%97%D7%95%D7%9D-%D7%9E%D7%97%D7%A9%D7%95%D7%91-%D7%94%D7%A2%D7%A0%D7%9F-%D7%A2/",
          title: "New-Tech Online: הסכם חשוב ליעל תוכנה בתחום מחשוב הענן עם Spanning",
          desc: "הרחבת סל פתרונות הענן וגיבוי נתוני ענן ארגוניים במסגרת אגף הענן והחדשנות ביעל תוכנה.",
          source: "New-Tech Magazine",
          type: "press",
          badge: "הסכם אסטרטגי"
        },
        {
          url: "https://media.licdn.com/dms/image/v2/C5622AQEtf8Voz0cpCA/feedshare-shrink_800/feedshare-shrink_800/0/1583599976628?e=1790208000&v=beta&t=KazSTO9TEA2E6GQkgl47ykT_o9lh2t_1GXnFp4ujoS4",
          title: "הרצאה והצגת טכנולוגיות בענן וחדשנות עסקית",
          desc: "הצגת פתרונות ענן וארכיטקטורה מתקדמת בכנס מקצועי.",
          source: "LinkedIn Media",
          type: "media",
          badge: "Keynote Photo"
        }
      ]
    },

    {
      id: "partner-infra",
      period: "2011 - 2013",
      role: "מנהל מחלקת תשתיות ואפליקציות",
      company: "פרטנר תקשורת (Partner / Orange)",
      companyType: "טלקום ותקשורת סלולרית",
      badge: "תקציב 30M ₪ | מיזוג 012Smile",
      category: "telecom",
      shortSummary: "ניהול מחלקה רחבה של צוותי פיתוח, ניהול פרויקטים ומומחי תשתיות, ניהול תקציב של כ-30 מיליון ₪, מיזוג התשתיות האפליקטיביות של פרטנר ו-012Smile, והובלת שינוי שיטות עבודה ו-ITIL יחד עם Amdocs.",
      bullets: [
        "ניהול מחלקה הכוללת צוותי פיתוח, ניהול פרויקטים ומומחי תשתיות ותפעול.",
        "ניהול פרויקטים מרכזיים בשליטה ובקרה, מסדי נתונים, מערכות קוליות/Contact Center וביצועי מערכות.",
        "ניהול תקציב בהיקף של עשרות מיליוני ₪ וניהול מו\"מ מול חברות ענק כמו Oracle, HP, Microsoft וכו'.",
        "מיזוג התשתיות האפליקטיביות של פרטנר ו-012Smile.",
        "שותף בצוות שהוביל ביחד עם Amdocs תהליכים לשינוי שיטות עבודה והטמעת מתודולוגיית ITIL.",
        "הובלת תכנית אסטרטגית לשינוי שיטת ההפעלה והמערכות הטכנולוגיות במוקדי השירות והמכירה - משלב ה-RFP, עד בחירת ספק והטמעת הפתרון."
      ],
      tags: ["Telecom 30M NIS", "012Smile Merger", "ITIL with Amdocs", "Contact Center Tech", "Oracle / HP / Microsoft", "Database & Performance"]
    },

    {
      id: "partner-apps",
      period: "2010 - 2011",
      role: "מנהל תחום אפליקציות",
      company: "פרטנר תקשורת (Partner / Orange)",
      companyType: "טלקום ותקשורת סלולרית",
      badge: "זוכה פרס מצטיין המחשוב IT Awards",
      category: "telecom",
      shortSummary: "ניהול 3 צוותי פיתוח תוכנה, תצורה ותפעול מערכות ליבה (CRM, Billing, ERP), ארכיטקטורת אינטגרציה, וזכייה בפרס מצטיין המחשוב לשנת 2011 (ITAwards) על פיתוח מחדש של מערכת ההזמנות (Ordering).",
      bullets: [
        "ניהול 3 צוותי פיתוח מערכות תוכנה, ניהול תצורה וצוות תפעול מערכות ליבה CRM, Billing ו-ERP.",
        "ארכיטקטורה ופיתוח אינטגרציה בין מערכות ופיתוח שירותים רוחביים.",
        "זוכה פרס מצטיין המחשוב לשנת 2011 (ITAwards) על הובלת פרויקט להחלפת התשתית ופיתוח מחדש של מערכת לניהול הזמנה (Ordering) של החברה.",
        "חלק מצוות קטן שנבחר לנהל אירועים של תקלות מערכתיות וקריטיות במערכות המידע והטכנולוגיה בחברה."
      ],
      tags: ["IT Awards Winner 2011", "Ordering Core System", "CRM & Billing & ERP", "Mission-Critical Ops", "Software Architecture"]
    },

    {
      id: "imdsoft",
      period: "2006 - 2010",
      role: "מנהל צוות פיתוח",
      company: "חברת iMDsoft",
      companyType: "תוכנה רפואית קריטית לבתי חולים גלובליים",
      badge: "HealthTech | Clinical Core Software",
      category: "tech",
      shortSummary: "ניהול צוות הפיתוח של המודול המרכזי באפליקציה המטפל בלוגיקה למחשוב נתוני החולה וממשק המשתמש לבתי חולים בעולם, ארכיטקטורה ובקרת קוד, והגדרת ה-Roadmap וקו המוצרים העתידי.",
      bullets: [
        "ניהול צוות הפיתוח של המודול המרכזי באפליקציה המטפל בלוגיקה למחשוב נתוני החולה וממשק המשתמש.",
        "הובלת קבוצת מפתחים – ניהול משימות, הנחיה מקצועית, ארכיטקטורה ובקרת קוד.",
        "חלק מצוות להגדרת ה-roadmap וקו המוצרים העתידיים של החברה."
      ],
      tags: ["HealthTech", "Hospital Clinical Systems", "R&D Team Lead", "Software Architecture", "Product Roadmap"]
    },

    {
      id: "idf-intelligence",
      period: "1998 - 2004",
      role: "ראש תחום טכנולוגיות ואמצעי לחימה (רס\"ן)",
      company: "צה\"ל - חיל המודיעין (אמ\"ן)",
      companyType: "מודיעין עילית וביטחון",
      badge: "רב-סרן | פעמיים מצטיין ראש אמ״ן",
      category: "defense",
      shortSummary: "גיבוש עמדת הצבא בנוגע לאסטרטגיה לשיתופי פעולה בפיתוח טכנולוגיה ואמל״ח עם מדינות זרות, פיתוח אנליזות ומודלים מורכבים והצגתם בפני הדרגים הבכירים ביותר בצה״ל ובמערכת הביטחון. פעמיים זוכה פרס מצטיין ראש אגף המודיעין.",
      bullets: [
        "גיבוש עמדת הצבא בנוגע לאסטרטגיה לשיתופי פעולה בפיתוח טכנולוגיה ואמצעי לחימה עם מדינות זרות.",
        "פיתוח אנליזות ומודלים – הצגה ודיון בפני הדרגים הבכירים ביותר בצבא ובמערכת הביטחון.",
        "פעמיים זוכה בפרס מצטיין ראש אגף המודיעין (אמ\"ן)."
      ],
      tags: ["דרגת רס״ן", "חיל המודיעין (אמ״ן)", "2x מצטיין ראש אמ״ן", "שיתופי פעולה בינלאומיים", "אנליזות אסטרטגיות", "קבלת החלטות C-Level"]
    }
  ],

  educationAndMentorship: {
    education: [
      {
        period: "2012 - 2013",
        degree: "Executive MBA (תואר שני במנהל עסקים למנהלים)",
        institution: "אוניברסיטת בר אילן",
        icon: "graduation-cap"
      },
      {
        period: "2004 - 2008",
        degree: "B.Sc בהנדסת תוכנה בהצטיינות",
        institution: "מכללת שנקר - הפקולטה להנדסה",
        icon: "award"
      }
    ],
    academicAndMentoring: [
      {
        period: "2015 - היום",
        role: "מרצה, שופט ומנטור טכנולוגי ועסקי",
        institution: "בית הספר ליזמות, אוניברסיטת רייכמן",
        icon: "compass"
      },
      {
        period: "2008 - 2009",
        role: "מרצה לקורס מבוא למדעי המחשב",
        institution: "מכללת שנקר - הפקולטה להנדסה",
        icon: "book-open"
      }
    ]
  },

  mediaHub: [
    {
      id: "m-evident",
      title: "המדד המוביל קבע: בנק לאומי במקום הראשון בתחום ה-AI בישראל",
      subtitle: "מדד Evident AI הבינלאומי דירג את לאומי במקום הראשון בארץ ובמקום ה-2 בחדשנות במזה״ת ואפריקה",
      source: "מעריב עסקים",
      category: "press",
      date: "2026",
      url: "https://www.maariv.co.il/economy/israel/article-1328368",
      image: "https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,w_800/journalism/2026/02/leumi-ai.jpg",
      tags: ["AI Leader", "Evident AI", "בנק לאומי", "כתבה ראשית"],
      featured: true
    },
    {
      id: "m-themarker-ai",
      title: "מהפכת ה-AI מגיעה ללאומי: אמיר רוזן יעמוד בראש מרכז ה-AI",
      subtitle: "לאומי מקים מרכז AI בכפיפות ישירה למטה המנכ״ל לגיבוש והובלת אסטרטגיית ה-AI של הבנק",
      source: "TheMarker",
      category: "press",
      date: "2025 / 2026",
      url: "https://www.themarker.com/markets/2025-12-22/ty-article/.premium/0000019b-45e9-d41d-adfb-75ff0c060000",
      image: "https://img.haarets.co.il/bs/0000019b-45e9-d41d-adfb-75ff0c060000/57/15/7044a9bb",
      tags: ["C-Level", "TheMarker", "מרכז AI", "מינוי בכיר"],
      featured: true
    },
    {
      id: "m-themarker-serv",
      title: "״צריך להתמקד בשירות, ולא באיך לסחוט עוד שקל מהלקוח״",
      subtitle: "ראיון מרכזי בדיגיטלפסט: אמיר רוזן על מהפכת הדיגיטל, הזינוק באונליין וחוויית שירות אמיתית",
      source: "TheMarker דיגיטלפסט",
      category: "press",
      date: "2022",
      url: "https://www.themarker.com/technation/2022-03-30/ty-article/00000180-5bbe-dee0-afd6-7bffe33d0000",
      image: "https://img.haarets.co.il/bs/00000180-5bbe-dee0-afd6-7bffe33d0000/67/72/33fa5516",
      tags: ["חוויית לקוח", "שירות דיגיטלי", "TheMarker", "דיגיטלפסט"],
      featured: true
    },
    {
      id: "m-walla-trade",
      title: "צ'אט מבוסס AI וסורקי מניות: אפליקציית Trade החדשה של לאומי ב-AWS",
      subtitle: "האפליקציה הראשונה מסוגה בישראל בענן AWS עם חוויית מסחר מותאמת אישית מבוססת בינה מלאכותית",
      source: "וואלה! כסף",
      category: "press",
      date: "2024",
      url: "https://finance.walla.co.il/item/3703888",
      image: "https://images.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/7/7/5/3775622-46.jpg",
      tags: ["Trade App", "AWS Cloud", "AI Chat", "וואלה כסף"],
      featured: true
    },
    {
      id: "m-maariv-sf",
      title: "סיילספורס משיקה את Hyperforce בישראל – לאומי הלקוח הראשון",
      subtitle: "בנק לאומי מוביל את המעבר לפלטפורמת הענן Hyperforce להעצמת יכולות דיגיטליות ו-AI",
      source: "מעריב טכנולוגיה",
      category: "press",
      date: "2024",
      url: "https://www.maariv.co.il/business/tech/article-1131625",
      image: "https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,w_800/journalism/2024/09/salesforce-leumi.jpg",
      tags: ["Salesforce", "Hyperforce", "AWS", "מעריב"],
      featured: true
    },
    {
      id: "m-newtech-cloud",
      title: "הסכם חשוב ליעל תוכנה בתחום מחשוב הענן עם חברת Spanning",
      subtitle: "הרחבת סל פתרונות הענן וגיבוי נתונים באגף החדשנות והענן של יעל תוכנה",
      source: "New-Tech Online Magazine",
      category: "press",
      date: "2014",
      url: "https://www.new-techonline.com/2014/06/%D7%94%D7%A1%D7%9B%D7%9D-%D7%97%D7%A9%D7%95%D7%91-%D7%9C%D7%99%D7%A2%D7%9C-%D7%AA%D7%95%D7%9B%D7%A0%D7%94-%D7%91%D7%AA%D7%97%D7%95%D7%9D-%D7%9E%D7%97%D7%A9%D7%95%D7%91-%D7%94%D7%A2%D7%A0%D7%9F-%D7%A2/",
      tags: ["Cloud Solutions", "New-Tech", "Spanning", "Yael Group"]
    },
    {
      id: "m-trusttech",
      title: "ראיון 'טרסטק' במעלית: חדשנות וטכנולוגיה בבנק לאומי",
      subtitle: "ראיון וידאו ייחודי על האסטרטגיה הדיגיטלית, טכנולוגיות ערוצים וחוויית הלקוח",
      source: "Trust Tech Video Series",
      category: "video",
      url: "https://www.google.com/search?q=%D7%98%D7%A8%D7%A9%D7%98%D7%A7+%D7%9E%D7%A2%D7%9C%D7%99%D7%AA+%D7%90%D7%9E%D7%99%D7%A8+%D7%A8%D7%95%D7%96%D7%9F+%D7%91%D7%A0%D7%A7+%D7%9C%D7%90%D7%95%D7%9E%D7%99",
      tags: ["ראיון וידאו", "Elevator Pitch", "Trust Tech", "בנק לאומי"]
    },
    {
      id: "m-insta-reel",
      title: "הצצה מאחורי הקלעים: אירוע חדשנות ועשייה מקצועית",
      subtitle: "ריל אינסטגרם אותנטי מתוך כנס ופעילות טכנולוגית",
      source: "Instagram Reel",
      category: "social",
      url: "https://www.instagram.com/reels/DZFBabWtD-3/",
      tags: ["Instagram", "Reel", "מאחורי הקלעים"]
    },
    {
      id: "m-li-ai-finance",
      title: "AI in Finance: Trust, Control & Personalization",
      subtitle: "מאמר ותובנות מנהיגות על שילוב AI בסביבות פיננסיות מוסדרות",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7404270826176442368/",
      tags: ["AI in Finance", "Trust", "Governance", "LinkedIn"]
    },
    {
      id: "m-li-ai-strategy",
      title: "הובלת אסטרטגיית ה-AI והסוכנים החכמים בבנק לאומי",
      subtitle: "כיצד הופכים יוזמות GenAI ו-Agentic AI לערך עסקי מדיד בקנה מידה של בנק מוביל",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7424365418221432832/",
      tags: ["Agentic AI", "AI Strategy", "Impact", "LinkedIn"]
    },
    {
      id: "m-li-cvc",
      title: "ה-CVC צומח בישראל: השקעות תאגידיות בסטארטאפים",
      subtitle: "השקת פעילות קרן ההשקעות Irani Ventures ותפיסת החדשנות התאגידית בריטייל-טק",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6911298752464965632/",
      tags: ["Irani Ventures", "CVC", "Retail Tech", "Startups"]
    },
    {
      id: "m-li-coresight",
      title: "Coresight Research: אופטימיזציית מלאי ומסע הלקוח עם Nano BLE",
      subtitle: "מחקר בינלאומי המציג את יישום חיישני Wiliot בפקטורי 54 לחנויות העתיד",
      source: "Coresight Research",
      category: "media",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6860937126410805248/",
      tags: ["Wiliot", "Nano BLE", "Coresight", "IoT Retail"]
    },
    {
      id: "m-li-digitalfest",
      title: "דיגיטלפסט: הרצאה על טרנספורמציה דיגיטלית ושירות פרימיום",
      subtitle: "תובנות מהשטח על אי-קומרס, חוויית לקוח וטכנולוגיה ממוקדת אנשים",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6914873493704577024/",
      tags: ["Digitalfest", "Keynote", "Customer Journey", "LinkedIn"]
    },
    {
      id: "m-li-reichman",
      title: "שת״פ פקטורי 54 ואוניברסיטת רייכמן: חיבור יזמות וטכנולוגיה",
      subtitle: "הובלת פרויקט משותף עם סטודנטים ויזמים לפיתוח פתרונות חדשניים בריטייל",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6906947783543394304/",
      tags: ["Reichman", "Factory 54", "Academic Collab", "Innovation"]
    },
    {
      id: "m-li-allcloud-aws",
      title: "טרנספורמציה דיגיטלית ושותפויות ענן (AWS, AllCloud, Leumi)",
      subtitle: "האצת החדשנות בענן וב-GenAI בבנק לאומי כבסיס לחוויית לקוח ובנקאי מתקדמת",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7348105322114265088/",
      tags: ["AWS", "AllCloud", "GenAI", "Bank Leumi"]
    },
    {
      id: "m-li-sf-hyperforce",
      title: "השקת Salesforce Hyperforce בלאומי: קפיצת מדרגה טכנולוגית",
      subtitle: "אינטגרציה עמוקה של Salesforce, ענן ו-AI לחוויית לקוח ובנקאי מהמתקדמות בעולם",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7209999276876177408/",
      tags: ["Salesforce", "Hyperforce", "CRM", "Leumi"]
    },
    {
      id: "m-li-mentoring-growth",
      title: "אוניברסיטת רייכמן: מנטורינג ושיפוט בתכניות יזמות",
      subtitle: "הדרכת יזמים צעירים, פיתוח מודלים עסקיים וליווי טכנולוגי למיזמים",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6958397301593640961/",
      tags: ["Reichman", "Mentoring", "Startups", "Growth"]
    },
    {
      id: "m-li-call-startups",
      title: "קול קורא לסטארטאפים: חדשנות, קיימות ושרשרת אספקה",
      subtitle: "הזמנת יזמים וסטארטאפים מובילים לשיתוף פעולה והשקעות מטעם Irani Ventures",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7053277755680915457/",
      tags: ["Startups Call", "Sustainability", "Supply Chain", "Irani Ventures"]
    },
    {
      id: "m-li-global-meetings",
      title: "ביקור טכנולוגי ומפגשי C-Level עם מנהלי מותגי יוקרה עולמיים",
      subtitle: "מפגשים אסטרטגיים עם מובילי טכנולוגיה וחדשנות בריטייל הבינלאומי",
      source: "LinkedIn Post",
      category: "media",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6940671719418281984/",
      tags: ["C-Level", "Global Luxury", "Tech Meetings"]
    },
    {
      id: "m-li-tech-panel",
      title: "פאנל מנהיגות טכנולוגית וטרנספורמציה דיגיטלית",
      subtitle: "הצגת מקרי בוחן של חדשנות בפקטורי 54 ושינוי תפיסת ההפעלה",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6939894548789608448/",
      tags: ["Tech Panel", "Leadership", "Transformation"]
    },
    {
      id: "m-li-iot-data",
      title: "הרצאה בכנס טכנולוגי: מהפכת הדאטה וה-IoT בריטייל",
      subtitle: "תובנות מעשיות מהטמעת חיישנים חכמים ו-Nano BLE ברשת החנויות",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6935822178948894720/",
      tags: ["IoT", "Data Revolution", "Nano BLE", "Keynote"]
    },
    {
      id: "m-li-channels-excellence",
      title: "הובלת מצוינות וטכנולוגיות ערוצים בלאומי",
      subtitle: "עדכונים על תהליכי המודרניזציה ב-Omnichannel ומערכות ה-Core",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7333598700700667905/",
      tags: ["Omnichannel", "Bank Leumi", "Customer Channels"]
    },
    {
      id: "m-li-cx-leumi",
      title: "שירות לקוחות ודיגיטל בנקאי מוביל",
      subtitle: "שביעות רצון לקוחות, חדשנות שירותית והובלת השוק בדיגיטל בנקאי חכם",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7293626010468573185/",
      tags: ["Customer Satisfaction", "Digital Banking", "Leumi"]
    },
    {
      id: "m-li-cloud-keynote",
      title: "הרצאה והצגת טכנולוגיות בענן וחדשנות עסקית",
      subtitle: "תמונת אירוע מקצועי והרצאה למנהלים בכירים",
      source: "LinkedIn Media",
      category: "media",
      url: "https://media.licdn.com/dms/image/v2/C5622AQEtf8Voz0cpCA/feedshare-shrink_800/feedshare-shrink_800/0/1583599976628?e=1790208000&v=beta&t=KazSTO9TEA2E6GQkgl47ykT_o9lh2t_1GXnFp4ujoS4",
      tags: ["Keynote", "Cloud Tech", "Conference"]
    },
    {
      id: "m-li-f54-innovation",
      title: "חדשנות טכנולוגית וחוויית לקוח בפקטורי 54",
      subtitle: "הטמעת טכנולוגיות מתקדמות וחוויית קנייה ייחודית",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6878595464929796097/",
      tags: ["Factory 54", "Innovation", "Luxury Retail"]
    },
    {
      id: "m-li-retail-thought",
      title: "הובלת חדשנות ויזמות בריטייל",
      subtitle: "פוסט מקצועי על טכנולוגיות ריטייל והשקעות",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6935516566138560512/",
      tags: ["Retail Innovation", "Insights", "LinkedIn"]
    },
    {
      id: "m-li-vc-ecosystem",
      title: "חיבור בין סטארטאפים, ריטייל וחדשנות עסקית",
      subtitle: "אירועי פיץ' והשקעות קרן ההון סיכון Irani Ventures",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7038989210904670208/",
      tags: ["VC", "Pitch Events", "Retail Innovation"]
    },
    {
      id: "m-li-leadership-community",
      title: "הרצאות והובלת קהילת יזמות וטכנולוגיה",
      subtitle: "שיתוף ידע והרצאות למנהלים וסטארטאפים",
      source: "LinkedIn Post",
      category: "leadership",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6732563324820623360/",
      tags: ["Community", "Mentorship", "Knowledge Sharing"]
    },
    {
      id: "m-li-profile",
      title: "פרופיל לינקדאין רשמי של אמיר רוזן",
      subtitle: "רשת קשרים מקצועית, המלצות ועדכונים שוטפים",
      source: "LinkedIn Official Profile",
      category: "social",
      url: "https://www.linkedin.com/in/amir-rosen/",
      tags: ["LinkedIn", "Profile", "Network"]
    },
    {
      id: "m-li-activity-stream",
      title: "זרם הפעילות והמאמרים המלא בלינקדאין",
      subtitle: "כל הפוסטים, השיתופים והתובנות המקצועיות במקום אחד",
      source: "LinkedIn Activity Feed",
      category: "social",
      url: "https://www.linkedin.com/in/amir-rosen/recent-activity/all/",
      tags: ["Feed", "Updates", "Articles"]
    }
  ],

  competencies: [
    {
      name: "מנהיגות AI, GenAI ו-Agentic AI",
      level: 98,
      desc: "גיבוש אסטרטגיית AI ארגונית מקצה לקצה, הובלת AI Board בראשות מנכ״ל, יישום סוכנים חכמים, AI SDLC, תמלול ו-GenAI עם ROI מדיד.",
      icon: "bot"
    },
    {
      name: "מנהיגות C-Level, אסטרטגיה ו-P&L",
      level: 96,
      desc: "ניהול יחידות עסקיות וטכנולוגיות בהיקף עשרות מיליוני שקלים, ניהול דירקטוריון CVC, מו\"מ מול ענקיות תוכנה (Salesforce, AWS, Oracle, Microsoft).",
      icon: "briefcase"
    },
    {
      name: "טרנספורמציה דיגיטלית & Omnichannel",
      level: 95,
      desc: "הובלת מהלכי מודרניזציה ב-Contact Center (CCaaS), הטמעת Salesforce Hyperforce, אפליקציות מסחר ומובייל, ופרסונליזציה בזמן אמת.",
      icon: "layers"
    },
    {
      name: "ארכיטקטורת ענן, תשתיות & Core Integration",
      level: 94,
      desc: "תכנון ומימוש ארכיטקטורות ענן היברידיות (AWS), אינטגרציה מורכבת בין מערכות ליבה (Core Banking, ERP, CRM, Billing), ו-Mission-Critical SLA.",
      icon: "cloud"
    },
    {
      name: "Retail Tech, IoT & eCommerce",
      level: 92,
      desc: "הפיכת חברות ל-Data Driven, הטמעת טכנולוגיית חיישני Nano BLE של Wiliot, פיתוח מערכות פנים-ארגוניות לאופטימיזציית מלאי ושרשרת אספקה.",
      icon: "shopping-bag"
    },
    {
      name: "השקעות הון סיכון (CVC), ליווי ומנטורינג",
      level: 95,
      desc: "הקמה וניהול קרן השקעות תאגידית (Irani Ventures), איתור וליווי סטארטאפים, שיפוט ומנטורינג מעל עשור בבית הספר ליזמות של אוניברסיטת רייכמן.",
      icon: "sparkles"
    }
  ],

  aiKnowledgeBase: [
    {
      keywords: ["לאומי", "בנק", "ai", "מרכז", "caio", "evident", "תוצאות", "הישגים", "אימוץ"],
      question: "מהם הישגי הדגל של אמיר כ-Chief AI Officer בבנק לאומי?",
      answer: "אמיר הקים והוביל את מרכז ה-AI של בנק לאומי בכפיפות ישירה למנכ״ל הבנק. תחת הנהגתו, דורג בנק לאומי בשנת 2026 על ידי מדד Evident AI הבינלאומי במקום ה-1 בישראל באימוץ AI, ובמקום ה-2 במזרח התיכון ואפריקה בחדשנות. בין ההישגים המדידים: פריסת צ'אט AI לכלל לקוחות הבנק שהביא לירידה של 10% בפניות הכתובות לבנקאי ללא עומס במוקדים, פתרונות תמלול ו-AI שהורידו 95% משגיאות התיעוד וקיצרו 15%-20% מזמני הטיפול, והובלת AI-Driven SDLC עם יעד שיפור פרודוקטיביות של מעל 20%."
    },
    {
      keywords: ["סגנון", "מנהיגות", "ניהול", "ערכים", "אנשים", "צוות", "העצמה"],
      question: "מהו סגנון הניהול והמנהיגות של אמיר?",
      answer: "אמיר מאמין במנהיגות מעצימה, שקופה ואנושית בגובה העיניים, המשלבת ראייה אסטרטגית עסקית עם הבנה טכנולוגית מעמיקה (כולל Hands-On). הוא מתמחה בבניית צוותים חזקים, טיפוח מנהלים מובילים, יצירת תרבות של מצוינות וסקרנות טכנולוגית מתמדת, וחיבור הדוק בין יעדים ארגוניים לפתרונות טכנולוגיים שמייצרים ערך עסקי מדיד ו-ROI גבוה."
    },
    {
      keywords: ["שוקי הון", "ערוצים", "סיילספורס", "salesforce", "trade", "קשר", "omnichannel", "אגף"],
      question: "ספר על הניסיון של אמיר בניהול אגף ערוצים, שוקי הון וטכנולוגיות רוחביות בלאומי",
      answer: "בתפקידו כראש אגף ערוצים ושוקי הון (2023-2025), אמיר ניהל אגף טכנולוגי רחב באחריות End-to-End על Product, Tech & Delivery. הוא הוביל את מערך ה-Omnichannel, מהלך אסטרטגי למודרניזציית ה-Contact Center (CCaaS), הטמעת Salesforce Hyperforce על גבי ענן AWS כפלטפורמה ארגונית אסטרטגית, פיתוח והשקת אפליקציית המסחר Trade מבוססת ענן ו-AI, ניהול מערכות רוחביות (BPM, Docomotion) ומערך המכשירים האוטומטיים 24/7."
    },
    {
      keywords: ["אירני", "פקטורי 54", "ריטייל", "vc", "הון סיכון", "השקעות", "סטארטאפ", "irani ventures"],
      question: "מה עשה אמיר בקבוצת אירני (Factory 54) ובקרן Irani Ventures?",
      answer: "אמיר כיהן כמנכ״ל חטיבת הטכנולוגיות וקרן ההשקעות Irani Ventures (2022-2023) וחבר בדירקטוריון המצומצם של הקבוצה. הוא הוביל השקעות בסטארטאפים בתחום ה-Retail Tech ויצר סינרגיות מול מותגי יוקרה עולמיים. קודם לכן, כסמנכ\"ל טכנולוגיות ומערכות מידע (2017-2022), הוביל טרנספורמציה דיגיטלית מלאה שהפכה את הקבוצה ל-Data Driven מבוססת כלי AI/ML, כולל הטמעת חיישני Nano BLE (Wiliot) ופיתוח מערכות פנים-ארגוניות מתקדמות."
    },
    {
      keywords: ["תקציב", "p&l", "היקף", "ספקים", "מו״מ", "מיליונים"],
      question: "איזה ניסיון יש לאמיר בניהול תקציבי ענק ו-P&L?",
      answer: "לאמיר ניסיון מוכח של מעל עשור בניהול יחידות עסקיות ותקציבי ענק: ניהול יחידת P&L של כ-20 מיליון ₪ בשנה ביעל תוכנה, ניהול תקציבי מחלקות ואגפים של עשרות מיליוני שקלים בפרטנר (30M ₪), במנורה מבטחים ובבנק לאומי. לאמיר ניסיון עשיר בניהול מו\"מ והסכמים אסטרטגיים מול ספקיות ענק בינלאומיות (Salesforce, AWS, Oracle, Microsoft, HP, Google ועוד)."
    },
    {
      keywords: ["מודיעין", "אמ״ן", "צבא", "צה״ל", "רס״ן", "פרס", "הצטיינות"],
      question: "מה הרקע של אמיר בצה\"ל ובחיל המודיעין?",
      answer: "אמיר שירת כראש תחום טכנולוגיות ואמצעי לחימה בחיל המודיעין (אמ\"ן) בדרגת רב-סרן (רס\"ן). במסגרת תפקידו גיבש את עמדת הצבא לגבי שיתופי פעולה אסטרטגיים בפיתוח אמל״ח עם מדינות זרות, פיתח אנליזות ומודלים מורכבים שהוצגו בפני הדרגים הבכירים ביותר בצה״ל ובמערכת הביטחון, וזכה פעמיים בפרס מצטיין ראש אגף המודיעין (אמ״ן)."
    },
    {
      keywords: ["השכלה", "תואר", "לימודים", "mba", "בר אילן", "שנקר", "רייכמן", "אקדמיה"],
      question: "מהי ההשכלה האקדמית של אמיר ופועלו באקדמיה?",
      answer: "אמיר בעל תואר שני Executive MBA במנהל עסקים למנהלים מאוניברסיטת בר אילן (2012-2013), ותואר ראשון B.Sc בהנדסת תוכנה בהצטיינות יתרה (Summa Cum Laude) ממכללת שנקר (2004-2008). בנוסף, לימד כמבוא למדעי המחשב בשנקר, ומזה למעלה מ-10 שנים מכהן כמרצה, שופט ומנטור עסקי וטכנולוגי בבית הספר ליזמות של אוניברסיטת רייכמן."
    },
    {
      keywords: ["אישי", "משפחה", "ילדים", "תחביבים", "אופי", "אדם"],
      question: "ספר לי על אמיר ברמה האישית",
      answer: "אמיר הוא איש משפחה מסור, המאמין שהעוגן המשפחתי והערכים הם הבסיס לכל הצלחה ומנהיגות עסקית. הוא ניחן בחום אנושי, יחסי אנוש מעולים, סקרנות אינטלקטואלית בלתי נדלית ותשוקה אמיתית להעצמת אנשים, יזמות ונתינה לחברה (כפי שבא לידי ביטוי במנטורינג רב השנים שלו ליזמים צעירים)."
    },
    {
      keywords: ["יצירת קשר", "טלפון", "מייל", "לינקדאין", "וואטסאפ", "פגישה", "ראיון"],
      question: "איך ניתן ליצור קשר ישיר עם אמיר רוזן?",
      answer: "ניתן לפנות לאמיר ישירות בטלפון או וואטסאפ: 054-2435566, בדוא״ל: ros.amir@gmail.com, או באמצעות פרופיל ה-LinkedIn הרשמי: https://www.linkedin.com/in/amir-rosen/ . אמיר זמין לשיחות עם מנכ״לים, דירקטורים ומשקיעים בנוגע להזדמנויות מנהיגות בכירות."
    }
  ]
};

if (typeof window !== "undefined") {
  window.CV_DATA = CV_DATA;
}
