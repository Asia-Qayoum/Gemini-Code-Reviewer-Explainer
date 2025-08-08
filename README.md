🚀✨ GEMINI CODE REVIEWER & EXPLAINER ✨🚀
<span style="font-size:30px;">🔍🧠 AI Powered Code Analysis Made Simple 🧠🔍</span>

🌟 FEATURES THAT MAKE IT AWESOME 🌟
❇️ Multiple Modes: Review, Explain, Test Cases, Optimize
❇️ Intuitive & Responsive React Interface
❇️ Real-Time AI-Powered Feedback
❇️ Lightweight & Easy Backend Integration
❇️ Supports Multiline & Complex Code

📋 PREREQUISITES TO GET STARTED 🧰
✔️ Node.js & npm/yarn
✔️ Backend API supporting /analyze POST
✔️ Valid AI API Key (Gemini or OpenAI)

🛠️ CRYSTAL CLEAR SETUP INSTRUCTIONS 🧱
1️⃣ Clone Repository
bash
git clone <your-repo-url>  
cd <project-folder>
2️⃣ Install Dependencies
bash
npm install  
# OR  
yarn install
3️⃣ Launch Frontend
bash
npm start  
# OR  
yarn start
<sub>🚦 Visit: http://localhost:3000 to use the app</sub>

4️⃣ Backend Setup Essentials
🔥 Make sure backend is running at http://localhost:5000 with /analyze endpoint
🔥 Configure API keys and CORS properly

⚙️ BACKEND API 🔧 SPECIFICATIONS
POST /analyze
Request JSON:

json
{
  "code": "<your_code_here>",
  "mode": "<review|explain|testcases|optimize>"
}
Response JSON:

json
{
  "result": "<AI generated output>"
}
✅ Backend must:

Support CORS for frontend

Handle different modes by adjusting prompts

Interface with Gemini/OpenAI APIs

🖥️ HOW TO USE THE APP 🎯
Paste your code snippet in the textarea.

Select mode (Review, Explain, Test Cases, Optimize).

Click Submit.

Read the AI’s magic response below!

🎬 DEMO & VISUAL PREVIEW 📸

<img width="1177" height="591" alt="image" src="https://github.com/user-attachments/assets/2cfd5d49-4e52-461c-8c05-c2aeb1afd1f5" />
<img width="1537" height="715" alt="image" src="https://github.com/user-attachments/assets/4a94b0a5-ed9b-4854-9ea5-f4e9d28376f1" />

<img width="1280" height="742" alt="image" src="https://github.com/user-attachments/assets/45818414-3edd-439e-821f-ce3de844842b" />
<img width="1161" height="643" alt="image" src="https://github.com/user-attachments/assets/c05bb94a-870e-43ef-9334-d5ccd2a013d9" />
<img width="1267" height="757" alt="image" src="https://github.com/user-attachments/assets/e37e233e-f011-4345-a02b-411a1833b43d" />

💡 NEXT STEPS & EXTENSIONS 🚀
⚙️ User authentication & profiles
⚙️ File upload support
⚙️ Streaming AI responses
⚙️ Multi-language support
⚙️ Admin dashboard for API & user management

🐛 TROUBLESHOOTING & COMMON ISSUES ⚠️
🚫 CORS Errors → Confirm backend CORS headers
🚫 API Errors → Check API keys and rate limits
🚫 Slow Performance → Tune AI params or backend specs
🚫 Network Errors → Confirm correct API URLs

🤝 CONTRIBUTING GUIDE ⭐
✔️ Fork & clone
✔️ Create a branch
✔️ Commit with clear messages
✔️ Open a PR for review

📄 LICENSE 📜
This project is licensed under the MIT License

