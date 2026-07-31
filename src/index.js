import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./Search/SearchBar";

// Pages - Lazy Loaded
const House = React.lazy(() => import("./Links/House"));
const Books = React.lazy(() => import("./Learn/Books"));
const Abouts = React.lazy(() => import("./Links/Abouts"));
const Contact = React.lazy(() => import("./ContactUs/Contact"));
const Admin = React.lazy(() => import("./Admin/Admin"));
const Dashboard = React.lazy(() => import("./Dashboard/Dashboard"));
const FeedbackAdmin = React.lazy(() => import("./Feedback/feedback"));
const Login = React.lazy(() => import("./Pages/Login"));
const Register = React.lazy(() => import("./Pages/Register"));

// English - Lazy Loaded
const Englishbooks = React.lazy(() => import("./English/Englishbooks"));
const Alphabets = React.lazy(() => import("./English/Alphabets"));
const Colors = React.lazy(() => import("./English/Colors"));
const Animals = React.lazy(() => import("./English/Animals"));
const Verb = React.lazy(() => import("./English/Verb"));

// Science - Lazy Loaded
const Sciencebook = React.lazy(() => import("./Science/Sciencebook"));
const Planets = React.lazy(() => import("./Science/Planets"));
const Weather = React.lazy(() => import("./Science/Weather"));
const Nature = React.lazy(() => import("./Science/Nature"));
const Trees = React.lazy(() => import("./Science/Trees"));

// Math - Lazy Loaded
const MathBook = React.lazy(() => import("./Math/Mathbook"));
const Numbers = React.lazy(() => import("./Math/Numbers"));
const Shape = React.lazy(() => import("./Math/Shape"));
const Sign = React.lazy(() => import("./Math/Sign"));
const Addition = React.lazy(() => import("./Math/Addition"));

// Life Skills - Lazy Loaded
const SkillBook = React.lazy(() => import("./Skills/SkillBook"));
const Habits = React.lazy(() => import("./Skills/Habits"));
const Manner = React.lazy(() => import("./Skills/Manner"));
const Discipline = React.lazy(() => import("./Skills/Discipline"));
const Honest = React.lazy(() => import("./Skills/Honest"));

// Search - Lazy Loaded
const BookPage = React.lazy(() => import("./Search/BookPage"));

// Manage Books - Lazy Loaded
const ManageBook = React.lazy(() => import("./Manage_Book/Managebook"));
const AddChapter = React.lazy(() => import("./AddChapters/AddChapter"));
const UpdateChapter = React.lazy(() => import("./UpdateChapter/UpdateChapter"));
const ManageUsers = React.lazy(() => import("./ManageUsers/ManageUsers"));


// Layout wrapper
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter =
    ["/dashboard", "/dashboard/feedback", "/manage-book", "/", "/register", "/add-chapter" , "/update-chapter", "/Admin", "/ManageUsers"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {!hideHeaderFooter && <SearchBar />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const AppRoutes = () => (
  <Layout>
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '100px', fontSize: '24px', fontWeight: 'bold', color: '#00a8f4' }}>Loading Magical World...</div>}>
      <Routes>
        <Route path="/house" element={<House />} />
        <Route path="/books" element={<Books />} />
        
        {/* English */}
        <Route path="/Englishbooks" element={<Englishbooks />} />
        <Route path="/Alphabets" element={<Alphabets />} />
        <Route path="/Colors" element={<Colors />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Verb" element={<Verb />} />

        {/* Science */}
        <Route path="/Sciencebook" element={<Sciencebook />} />
        <Route path="/Planets" element={<Planets />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Nature" element={<Nature />} />
        <Route path="/Trees" element={<Trees />} />

        {/* Math */}
        <Route path="/MathBook" element={<MathBook />} />
        <Route path="/Numbers" element={<Numbers />} />
        <Route path="/Shape" element={<Shape />} />
        <Route path="/Sign" element={<Sign />} />
        <Route path="/Addition" element={<Addition />} />

        {/* Life Skills */}
        <Route path="/SkillBook" element={<SkillBook />} />
        <Route path="/Habits" element={<Habits />} />
        <Route path="/Manner" element={<Manner />} />
        <Route path="/Discipline" element={<Discipline />} />
        <Route path="/Honest" element={<Honest />} />

        
        {/* Other pages */}
        <Route path="/Abouts" element={<Abouts />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/feedback" element={<FeedbackAdmin />} />

        {/* Login/Register */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Manage Books */}
        <Route path="/manage-book" element={<ManageBook />} />
        <Route path="/add-chapter" element={<AddChapter />} />
        <Route path="/update-chapter" element={<UpdateChapter />} />
        <Route path="/ManageUsers" element={<ManageUsers />} />

        {/* Search Page */}
        <Route path="/book/:subject/:book" element={<BookPage />} />

      </Routes>
    </Suspense>
  </Layout>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
