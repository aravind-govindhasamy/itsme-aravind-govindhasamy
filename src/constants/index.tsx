import {
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCogs,
  FaHtml5,
  FaCss3,
  FaGitAlt,
} from "react-icons/fa";
import { SiDotnet, SiPostman } from "react-icons/si"; // Importing .NET and Postman icons
import { GiNfc } from "react-icons/gi"; // Importing NFC icon

export const skillSets = [
  { id: 1, icon: <FaNodeJs />, name: "Node.js" },
  { id: 2, icon: <FaGitAlt />, name: "GitHub" },
  { id: 3, icon: <FaHtml5 />, name: "HTML" },
  { id: 4, icon: <FaCss3 />, name: "CSS" },
  { id: 5, icon: <FaJava />, name: "JavaScript" }, // Use a suitable icon for JavaScript
  { id: 6, icon: <SiDotnet />, name: ".NET" }, // Using .NET icon for C#
  { id: 7, icon: <FaPython />, name: "Python" },
  { id: 8, icon: <FaDatabase />, name: "SQL" },
  { id: 9, icon: <SiPostman />, name: "API Development" }, // Using Postman icon
  { id: 10, icon: <GiNfc />, name: "IoT RFID" }, // Using NFC icon for IoT RFID
  { id: 11, icon: <FaDatabase />, name: "MySQL Stored Procedures" }, // Using MySQL database icon
];
