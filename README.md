# ♻️ Ecoleta

[![GitHub Stars](https://img.shields.io/github/stars/beatrizj/ecoleta?style=flat-square)](https://github.com/beatrizj/ecoleta/stargazers)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/beatrizj/ecoleta?style=flat-square)](https://github.com/beatrizj/ecoleta/commits/master)
[![Top Language](https://img.shields.io/github/languages/top/beatrizj/ecoleta?style=flat-square)](https://github.com/beatrizj/ecoleta)


**Ecoleta** is a full-stack web application developed during [Rocketseat's Next Level Week 1.0](https://rocketseat.com.br/). The project aims to connect individuals with companies and organizations that collect recyclable waste, facilitating environmental awareness and proper waste disposal.

---

## 🧠 About the Project

Ecoleta allows users to locate collection points for various recyclable materials in their vicinity. Organizations can register their collection points, specifying the types of materials they accept. The application emphasizes:

- **User-friendly interface**
- **Interactive maps** to display collection points
- **Efficient data management** using a RESTful API
- **Responsive design** ensuring accessibility across devices

This project showcases proficiency in full-stack development, integrating front-end and back-end technologies to deliver a seamless user experience.

---

## 🚀 Technologies Used

- **Frontend:** React, TypeScript, HTML, CSS
- **Backend:** Node.js, Express, TypeScript
- **Database:** SQLite3 with Knex.js
- **Mobile:** React Native, Expo
- **Maps Integration:** Leaflet.js
- **API Testing:** Insomnia

---

## 📁 Project Structure

```plaintext
ecoleta/
├── server/             → Backend API with Express and TypeScript
│   ├── src/
│   │   ├── controllers/ → Route controllers
│   │   ├── database/    → Migrations and database configuration
│   │   ├── routes/      → API route definitions
│   │   └── server.ts    → Server entry point
├── web/                → Web application built with React
│   ├── src/
│   │   ├── pages/       → Application pages
│   │   ├── components/  → Reusable UI components
│   │   └── App.tsx      → Main application component
└── README.md
```

---

## 🛠️ How to Run the Project Locally
**Pre-requisites**
- Node.js
- Yarn or npm

**Steps**

1. Clone the repository:
``` bash
git clone https://github.com/beatrizj/ecoleta.git
cd ecoleta
```

2. Run the Backend:
``` bash
cd server
yarn install
yarn dev
```

3. Run the Frontend:
``` bash
cd web
yarn install
yarn start
```

---

## 📸 Screenshot

![image](https://user-images.githubusercontent.com/40468569/191609201-2158f3b0-2e89-44ef-b414-a447d09df7b5.png)

---

## 👩‍💻 Author
Made with 💜 by [Beatriz J](https://github.com/beatrizj) <br/>
📫 Contact: [LinkedIn](https://www.linkedin.com/in/beatrizjanuario/) | [Email](mailto:beeatriz.js@gmail.com)

---

## 🏷️ Tags
`#TypeScript` `#React` `#NodeJS` `#FullStack` `#Rocketseat` `#WebDevelopment`
