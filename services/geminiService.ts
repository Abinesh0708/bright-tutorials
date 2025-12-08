import { WEBSITE_CONTEXT } from "../constants";

// Simple keyword matching for a "no-API" local chatbot experience.
// This allows the user to get immediate responses without needing an API key.

// Helper to sanitize input
const normalize = (text: string) => text.toLowerCase().trim();

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const userText = normalize(message);

  // Simulate network delay for realism (optional, can be removed for instant response)
  await new Promise(resolve => setTimeout(resolve, 600));

  // --- 1. Greetings ---
  if (userText.match(/^(hi|hello|hey|greetings|good morning|good afternoon)/)) {
    return "Hello! Welcome to Bright Tutorials. We offer School Tuitions, College Coaching, and Competitive Exam training. How can I help you today?";
  }

  // --- 2. Contact / Phone ---
  if (userText.includes("phone") || userText.includes("call") || userText.includes("contact") || userText.includes("number") || userText.includes("reach")) {
    return "You can reach us at 04652 279887. We are happy to answer your calls!";
  }

  // --- 3. Location / Address ---
  if (userText.includes("where") || userText.includes("location") || userText.includes("address") || userText.includes("located") || userText.includes("visit")) {
    return "We are located at 12B, Mead Street, College Road, very near Old Corporation Office, Nagercoil-629001.";
  }

  // --- 4. Time / Hours ---
  if (userText.includes("time") || userText.includes("hours") || userText.includes("open") || userText.includes("when") || userText.includes("sunday")) {
    return "We are open from 9:00 AM to 7:00 PM, Monday to Saturday. Sunday is closed.";
  }

  // --- 4.5 Principal / Management ---
  if (userText.includes("principal") || userText.includes("head") || userText.includes("manager") || userText.includes("lingesh") || userText.includes("who is")) {
    return "Our Principal is Mr. R. A. Lingesh, M.A., B.Ed. He is dedicated to nurturing young minds and guiding them towards academic excellence.";
  }

  // --- 5. Courses & Subjects (Detailed) ---
  const isSchool = userText.includes("school") || userText.includes("class") || userText.includes("10") || userText.includes("12") || userText.includes("sslc") || userText.includes("hsc") || userText.includes("maths") || userText.includes("science");
  const isCollege = userText.includes("college") || userText.includes("be") || userText.includes("ba") || userText.includes("bsc") || userText.includes("bcom") || userText.includes("degree") || userText.includes("undergraduate") || userText.includes("postgraduate");
  const isCompetitive = userText.includes("competitive") || userText.includes("neet") || userText.includes("jee") || userText.includes("trb") || userText.includes("tet") || userText.includes("bank") || userText.includes("police");
  const isAdditional = userText.includes("computer") || userText.includes("english") || userText.includes("hindi") || userText.includes("spoken") || userText.includes("personality");

  if (isSchool) {
    return "For School Tuitions (Class 1 to 12), we offer complete subject-wise coaching. We provide special coaching for Class 10 (SSLC) & 12 (HSC), with a specific focus on Mathematics & Science. We also ensure personalized attention for slow learners.";
  }

  if (isCollege) {
    return "Our College-Level Coaching covers B.E. (All Mathematics Papers), Arts & Science degrees (B.A., B.Sc., B.Com), and Postgraduate courses (M.A., M.Sc., M.Com).";
  }

  if (isCompetitive) {
    return "We offer specialized training for major competitive exams:\n- TRB, TET, NET (Teacher Recruitment)\n- NEET, JEE (Medical & Engineering)\n- All Bank Exams\n- Police Exams\nOur structured study plans and practice tests help you crack exams confidently.";
  }

  if (isAdditional) {
    return "Enhance your skills with our Add-on Programs:\n- Computer Courses\n- Spoken English Training\n- Hindi Classes\n- Personality Development & Interview Preparation";
  }

  if (userText.includes("course") || userText.includes("subject") || userText.includes("offer") || userText.includes("teach") || userText.includes("program")) {
    return "We offer 4 main categories:\n1. School Tuitions (Class 1-12)\n2. College-Level Coaching (BE, UG, PG)\n3. Competitive Exams (NEET, JEE, Bank, Police)\n4. Additional Courses (Spoken English, Computer)\n\nWhich one would you like to know more about?";
  }

  // --- 6. Support Services ---
  if (userText.includes("library") || userText.includes("doubt") || userText.includes("material") || userText.includes("test") || userText.includes("support")) {
    return "We provide excellent support including Daily Practice Sessions, Weekly Tests, and Exam-focused Study Materials to ensure best performance.";
  }

  // --- 7. Why Choose Us / About ---
  if (userText.includes("vision") || userText.includes("mission")) {
    return "Our goal is to help students crack exams confidently through structured study plans and expert training.";
  }

  if (userText.includes("why") || userText.includes("best") || userText.includes("faculty") || userText.includes("about") || userText.includes("special") || userText.includes("choose")) {
    return "Why Choose Bright Tutorials?\n- Experienced and qualified faculty\n- Individual attention for every student\n- Daily practice sessions & weekly tests\n- Exam-focused study materials\n- Affordable fees and flexible timings\n- 100% result-oriented coaching";
  }

  // --- 8. Policies & Fees ---
  if (userText.includes("fee") || userText.includes("cost") || userText.includes("price") || userText.includes("payment")) {
    return "We offer affordable fees and flexible timings to make quality education accessible. Please call us at 04652 279887 for specific course fees.";
  }

  if (userText.includes("result") || userText.includes("pass")) {
    return "We are proud to offer 100% result-oriented coaching. Our daily practice and weekly tests ensure success.";
  }

  // --- 9. FAQ / Fallback Details ---
  if (userText.includes("one-on-one") || userText.includes("individual") || userText.includes("personal")) {
    return "Yes, we provide individual attention for every student, and personalized attention for slow learners.";
  }

  if (userText.includes("join") || userText.includes("enroll") || userText.includes("register") || userText.includes("admission") || userText.includes("start")) {
    return "To enroll, simply visit our center at 12B, Mead Street, College Road, Nagercoil or call us at 04652 279887. We'd love to have you!";
  }

  // Default fallback
  return "I can help you with details about School Tuitions, College Coaching, or Competitive Exams. You can also ask about our Principal, Location, or Fees!";
};