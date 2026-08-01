🌿 PlantX – AI-Powered Plant Disease Detection System

📌 Overview

PlantX is an AI-powered web application that detects plant diseases from leaf images using Deep Learning. The system enables users to upload one or multiple plant leaf images and instantly predicts the disease along with the confidence score. It also provides detailed information about the detected disease, including its description, causes, and recommended treatment, and allows users to download a professional PDF report.

The project is designed to assist farmers, students, researchers, and agricultural professionals by providing a fast, accurate, and easy-to-use disease detection solution.


🎯 Problem Statement

Plant diseases significantly reduce agricultural productivity and crop quality. Traditional disease diagnosis often depends on expert knowledge and manual inspection, which can be time-consuming and inaccessible in many rural areas.

PlantX addresses this challenge by using Artificial Intelligence to automatically identify plant diseases from leaf images and provide actionable information within seconds.

✨ Key Features

🌿 Detects multiple plant diseases from leaf images
📷 Supports single and multiple image uploads
🤖 Deep Learning-based disease prediction
📊 Displays prediction confidence score
📖 AI-generated disease description
⚠️ Provides disease causes
💊 Suggests treatment and prevention methods
📄 Downloadable PDF report
🎨 Modern and responsive user interface
⚡ Fast prediction using TensorFlow Lite
🧠 AI-powered disease information using Hugging Face

🏗️ System Architecture
                User
                  │
                  ▼
          Upload Leaf Image
                  │
                  ▼
        Image Preprocessing
                  │
                  ▼
      TensorFlow Lite CNN Model
                  │
                  ▼
        Disease Prediction
                  │
                  ▼
     Hugging Face AI Information
                  │
                  ▼
      Display Prediction Results
                  │
                  ▼
       Generate & Download PDF
🛠️ Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Python
* Flask

## AI & Machine Learning

* TensorFlow Lite
* NumPy
* OpenCV
* Pillow

## AI Integration

* Hugging Face Inference API

## Report Generation

* ReportLab

📂 Project Structure

PlantX/
│
├── model/
│   └── PlantX_model.tflite
│
├── static/
│   ├── reports/
│   ├── images/
│   ├── styles.css
│   └── result_styles.css
│
├── templates/
│   ├── upload.html
│   └── result.html
│
├── app.py
├── requirements.txt
├── README.md
└── .gitignore

⚙️ Installation
1. Clone Repository
bash
git clone https://github.com/your-username/PlantX.git

2. Move into Project
bash
cd PlantX

3. Create Virtual Environment
### Windows
bash
python -m venv venv
venv\Scripts\activate

### Linux / macOS
bash
python3 -m venv venv
source venv/bin/activate

## 4. Install Dependencies
bash
pip install -r requirements.txt

## 5. Run Application
bash
python app.py

Open your browser and visit:
http://127.0.0.1:5000


🚀 How It Works

1. Upload one or more plant leaf images.
2. Images are preprocessed (resized and normalized).
3. TensorFlow Lite CNN model predicts the disease.
4. Hugging Face AI generates:

   * Disease description
   * Causes
   * Treatment suggestions
5. Results are displayed with confidence score.
6. Users can download a detailed PDF report.


🌱 Supported Plant Classes

### Pepper

* Bacterial Spot
* Healthy

### Potato

* Early Blight
* Late Blight
* Healthy

### Tomato

* Bacterial Spot
* Early Blight
* Late Blight
* Leaf Mold
* Septoria Leaf Spot
* Spider Mites
* Target Spot
* Yellow Leaf Curl Virus
* Mosaic Virus
* Healthy

📄 Generated Report Includes

* Uploaded plant image
* Disease prediction
* Confidence score
* Disease description
* Disease causes
* Treatment recommendations


💡 Applications

* Smart Agriculture
* Precision Farming
* Agricultural Research
* Educational Projects
* Crop Health Monitoring
* Farmer Assistance Systems

👩‍💻 Author

Runali Rajendra Ramdurge
Bachelor of Technology (Computer Science & Engineering)


📜 License

This project is developed for educational and academic purposes. Feel free to fork, explore, and enhance it for learning.
