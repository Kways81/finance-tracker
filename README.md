# Finance Tracker

A sleek, minimalist web application for tracking personal finances in real-time, featuring a premium dark-mode aesthetic.

## 🚀 Features

* **Real-time Dashboard**: Instantly monitor your total balance, income, and expenses.
* **Visual Spending Analysis**: Interactive AreaCharts powered by Recharts to visualize expense distribution across categories.
* **Transaction Management**: Add new records with titles, amounts, and dates via a custom modal interface.
* **Persistent Storage**: Full integration with Supabase for secure data management and real-time updates.
* **Responsive Design**: Optimized for both desktop and mobile viewing with a consistent "Outfit" typography system.

## 🛠️ Tech Stack

* **Frontend**: React 19 with Vite.
* **Database**: Supabase.
* **Visualization**: Recharts.
* **Styling**: Plain CSS with CSS Variables and Styled-components.

## ⚙️ Local Setup

1.  **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd finance-tracker
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your credentials:
    ```env
    VITE_SUPABASE_URL=your_project_url
    VITE_SUPABASE_ANON_KEY=your_anon_key
    ```

4.  **Launch the app**:
    ```bash
    npm run dev
    ```

## 📂 Project Structure

* `src/components/`: Modular UI components including the Dashboard, Transaction List, and Charts.
* `src/hooks/`: Custom hooks for data fetching and CRUD operations (`useTransactions`).
* `src/lib/`: Library initializations and configurations.
* `src/index.css`: Global theme, CSS variables, and typography.

## 📄 License

This project is open source and available under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

