import React, { useEffect, useState } from "react";
import CardAbout from "./CardAbout";
import { CardGroup } from "react-bootstrap";
import FormAbout from "./FormAbout";

export default function AboutFunc() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Youssef",
      role: "Front-End Developer",
      image:
        "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, velit minima itaque consectetur, optio molestiae temporibus nostrum cupiditate praesentium voluptas facere ut est voluptates!",
    },
    {
      id: 2,
      name: "Ahmed",
      role: "Back-End Developer",
      image:
        "https://media.istockphoto.com/id/1324786380/photo/young-handsome-smiling-man-in-brown-shirt-and-glasses-feeling-confident-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=EWqUQzPW-4jH8rri6eQAeomVfeizC2ead7YCl28KhXU=",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, velit minima itaque consectetur, optio molestiae temporibus nostrum cupiditate praesentium voluptas facere ut est voluptates!",
    },
    {
      id: 3,
      name: "Khalid",
      role: "Database Manager",
      image:
        "https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ=",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, velit minima itaque consectetur, optio molestiae temporibus nostrum cupiditate praesentium voluptas facere ut est voluptates!",
    },
    {
      id: 4,
      name: "Sara",
      role: "UI/UX Designer",
      image:
        "https://deedmob-prod.imgix.net/o-prod/6897/3083726_1685589670408@612x408.jpeg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, velit minima itaque consectetur, optio molestiae temporibus nostrum cupiditate praesentium voluptas facere ut est voluptates!",
    },
  ]);
  const [isShow, setIsShow] = useState(true);
  // console.log(users);

  useEffect(() => {
    // Mounting Method (empty array=mount only)
    // console.log("useEffect Mount");
    return () => {
      console.log("unmount");
    };
  }, [setMembers]);

  useEffect(() => {
    // Updating Method (array=updated state)
    // console.log("useEffect Mount");
  }, [isShow]);

  return (
    <>
      <div className="container-fluid mx-auto p-2 bg-info bg-opacity-10">
        <div className="row m-4">
          <h1 className="display-4">What is The React Store?</h1>
          <hr />
          <div className="col-md-6 col-12-xs my-2">
            <img
              src={require("../../images/about-picutre.jpg")}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="col-md-6 my-2">
            <span className="display-3 bg-dark text-white d-inline-block">
              The <span className="text-info">React</span> Store
            </span>
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            consequuntur sint reprehenderit amet, alias voluptas assumenda quasi
            temporibus natus ut cumque dicta quibusdam, tenetur, facilis
            aperiam. Magnam autem voluptatum incidunt. Dignissimos, inventore?
            Voluptates tempora qui debitis vel suscipit veritatis asperiores,
            magni hic labore architecto voluptatibus ullam a saepe ipsa
            necessitatibus, quasi, cumque eligendi facere laboriosam. Laudantium
            eveniet soluta quia distinctio ipsam repellat perspiciatis deleniti
            esse molestias necessitatibus minima aperiam nihil nemo in expedita,
            blanditiis est quis voluptatum consequatur rerum possimus reiciendis
            non accusamus. Nostrum harum velit et, fugiat deserunt ex ullam
            accusantium, nesciunt eos fuga eius veniam optio sint dolor
            reprehenderit neque, ipsa cupiditate. Voluptatem id soluta omnis
            cumque sit dolores possimus illo impedit maxime sequi, quae
            praesentium aperiam beatae consequatur iure labore laboriosam non
            laudantium odio corporis animi, ratione saepe eaque? Cum praesentium
            vel velit nemo est at ea, hic, ad nihil asperiores ipsum dolor
            aspernatur, officia inventore nulla?
          </div>
        </div>
        <div className="row m-4">
          <h1 className="display-4">Who is working on our store?</h1>
          <hr />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          beatae, impedit excepturi ut aut maxime. Iste tempora neque magnam
          porro expedita commodi impedit possimus hic pariatur eius debitis quod
          corrupti odio, recusandae animi, corporis asperiores temporibus
          quisquam. Consequatur minima mollitia, reprehenderit eaque unde enim
          sed! Suscipit perspiciatis reprehenderit voluptate. Pariatur
          laboriosam voluptas eius repudiandae voluptates saepe? Quae officia
          beatae iure corrupti porro unde distinctio amet et repellendus nisi
          rerum natus modi nesciunt sed doloribus, velit, perferendis itaque qui
          esse quod nobis illum? Deleniti fugiat hic vero, earum possimus quo
          atque optio quasi dignissimos ex soluta aliquid, voluptatum obcaecati
          in magnam.
          <CardGroup>
            {members.map((member,idx) => {
              return (
                <CardAbout
                  key={idx}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  desc={isShow ? member.desc : ""}
                />
              );
            })}
          </CardGroup>
          <button
            className="btn btn-info w-50 mx-auto text-center"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            {isShow ? "Hide Members Description" : "Show Members Description"}
          </button>
        </div>
        <div className="row m-4">
          <h1 className="display-4">Want to become a member?</h1>
          <hr />
          <div className="col-md-6 my-2">
            <span className="display-4 bg-info">
               Apply Now!
            </span>
            <br />
            <FormAbout />
          </div>
          <div className="col-md-6 col-12-xs my-2">
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1661423665326-fe5a4089381c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              }
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
