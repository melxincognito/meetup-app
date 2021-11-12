import React from "react";
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Esta es la primera reunion de Geeks de React",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/00/95/community-of-madrid.jpg?w=700&h=500&s=1",
    address: "Calle de Tribulete, 9 Madrid, Espana",
    description:
      "Este es la primera reunion para los Geeks de React. Todos estan bienvenidos, disfrutamos a Barcelona juntos!",
  },
  {
    id: "m2",
    title: "Esta es la segunda reunion de Geeks de React.",
    image:
      "https://img2.10bestmedia.com/Images/Photos/378847/GettyImages-1085317916_54_990x660.jpg",
    address: "Carrer de America, 1 Barcelona, Espana",
    description:
      "La segunda reunion de Geeks de React... Aprovecha la oportunidad para disfrutar a Francia con nuestro grupo!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1> Todos los reuniones </h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
