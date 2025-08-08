Gemini Code Reviewer & Explainer
A React-based frontend web application paired with an LLM-powered backend that helps developers review, explain, optimize, and generate test cases for their code snippets using advanced AI language models like Google Gemini or OpenAI GPT.

🚀 Features
Multiple Modes: Choose from code review, explanation, test case suggestions, or code optimization powered by an intelligent AI backend.

Intuitive Interface: Responsive and user-friendly React UI optimized for smooth developer experience.

Real-time Feedback: Receive instant, AI-generated insights on your code.

Easy Integration: Communicates seamlessly with your backend API over HTTP.

Large Code Support: Handles multiline and complex code snippets comfortably.

📋 Prerequisites
Node.js (for running the React app)

npm or yarn package manager

Backend API running locally or remotely providing a POST /analyze endpoint

Compatible AI API key configured in the backend (e.g., Google Gemini API or OpenAI API)

🛠️ Setup Instructions
1. Clone the Repository
bash
git clone <your-repo-url>
cd <your-project-folder>
2. Install Frontend Dependencies
bash
npm install
or

bash
yarn install
3. Start the Frontend Application
bash
npm start
or

bash
yarn start
The app will be available at http://localhost:3000.

⚙️ Backend API Requirements
Your frontend expects a backend running at http://localhost:5000 (or your configured backend URL) with a POST endpoint /analyze accepting JSON:

json
{
  "code": "<your_code_here>",
  "mode": "<review|explain|testcases|optimize>"
}
It should respond with JSON:

json
{
  "result": "<AI generated output>"
}
Ensure your backend:

Allows cross-origin requests (CORS) from the frontend origin

Processes different mode values by setting appropriate LLM prompts

Communicates with AI models like Google Gemini or OpenAI GPT to generate responses

🖥️ Usage
Paste or type your code snippet in the text area.

Select the analysis mode from the dropdown:

Review Code

Explain Code

Suggest Test Cases

Optimize Code

Press the Submit button.

View the AI-generated analysis or suggestions displayed below.

🎬 Demo
Below are some screenshots showcasing the UI and example outputs:


<img width="1177" height="591" alt="image" src="https://github.com/user-attachments/assets/2cfd5d49-4e52-461c-8c05-c2aeb1afd1f5" />
<img width="1280" height="742" alt="image" src="https://github.com/user-attachments/assets/45818414-3edd-439e-821f-ce3de844842b" />
<img width="1161" height="643" alt="image" src="https://github.com/user-attachments/assets/c05bb94a-870e-43ef-9334-d5ccd2a013d9" />
<img width="1267" height="757" alt="image" src="https://github.com/user-attachments/assets/e37e233e-f011-4345-a02b-411a1833b43d" />


🐛 Troubleshooting
CORS errors: Confirm backend includes appropriate CORS headers allowing requests from your frontend URL.

Empty or invalid responses: Check backend service health and validate your AI API keys.

Slow or unresponsive: Adjust AI model parameters like temperature, max tokens, or upgrade backend hardware.

Network Issues: Verify that backend is running and accessible at expected port or URL.

🤝 Contributing
Fork this repository.

Create a new feature branch.

Commit your well-documented changes.

Open a pull request for review.

We welcome contributions and feedback!

📄 License
This project is licensed under the MIT License.
