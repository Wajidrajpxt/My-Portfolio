import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Tesla Car Website",
    img1: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD",
    img2: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg",
    description:
    "Tesla is an car website  including HTML CSS",
    tools: [
      "Materail UI",
      "Bootstrap",
      "Tailwind CSS",
      "Next.js",
    ],
    liveLink: "https://www.tesla.com/",
    frontEndLink: "https://github.com/Wajidrajpxt/tesla",
  },
  {
    id: 2,
    title: "Neuron",
    img1:"https://static.vecteezy.com/system/resources/previews/016/350/257/original/neuron-logo-or-nerve-cell-logo-with-concept-illustration-template-free-vector.jpg",
    img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlQfUirctIAfiGVOI3du50gfd1-kUssQXsQ&usqp=CAU",
    description:
      "neuron is very cool website in which website i use HTML CSSS   neuron is highly customizable, responsive, and scalable.",
    tools: [
      "React",
      "Nodejs",
      "Express",
      "Materail UI",
      "Bootstrap",
      "Tailwind CSS",
      "Next.js",
    ],
    liveLink: "https://demo.auburnforest.com/html/neuron/demo/index.html",
    frontEndLink: "https://github.com/Wajidrajpxt/Neuron",
  },
  {
    id: 3,
    title: "Neorech Website",
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACeRCLwyMvrt2LoC5rtdOoFbuRPGFcILydg&usqp=CAU",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAO0RwVhBcpQH28Plg9e6NqxugFKF4mYm1g&usqp=CAU",
    description:
    "this is an enfulancive website this project is full of animated",
    tools: [
      "Materail UI",
      "Bootstrap",
      "Tailwind CSS",
      "Next.js",
    ],
    liveLink: "https://neoreach.com/",
    frontEndLink: "https://github.com/Wajidrajpxt/neorech",
   
  },
  {
    id: 4,
    title: "Techno",
    img1: " ",
    img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISwpsTShN4t4jEoxEora8LywBZHPqt1WxBw&usqp=CAU",
    description:
       "this is techno website this like a shoping mart, here an user can search different kinds of recipe and find the necessary ingredients for the specific recipe item. Also a recipe item can be saved into the local storage of the browser. ",
    tools: ["React.js", " React Router", "Tailwind CSS"],
    liveLink: "https://www.tecno-mobile.com/",
    frontEndLink: "https://github.com/Wajidrajpxt/Tecno",
  },
  
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
