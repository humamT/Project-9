// import { useEffect, useState } from "react";
// import { useData } from "../../contexts/DataContext";
// import { getMonth } from "../../helpers/Date";

// import "./style.scss";

// const Slider = () => {
//   const { data } = useData();
//   const [index, setIndex] = useState(0);
//   const byDateDesc = data?.focus.sort((evtA, evtB) =>
//     new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
//   );
//   const nextCard = () => {
//     setTimeout(
//       () => setIndex(index < byDateDesc.length ? index + 1 : 0),
//       5000
//     );
//   };
//   useEffect(() => {
//     nextCard();
//   });
//   return (
//     <div className="SlideCardList">
//       {byDateDesc?.map((event, idx) => (
//         <>
//           <div
//             key={event.title}
//             className={`SlideCard SlideCard--${
//               index === idx ? "display" : "hide"
//             }`}
//           >
//             <img src={event.cover} alt="forum" />
//             <div className="SlideCard__descriptionContainer">
//               <div className="SlideCard__description">
//                 <h3>{event.title}</h3>
//                 <p>{event.description}</p>
//                 <div>{getMonth(new Date(event.date))}</div>
//               </div>
//             </div>
//           </div>
//           <div className="SlideCard__paginationContainer">
//             <div className="SlideCard__pagination">
//               {byDateDesc.map((_, radioIdx) => (
//                 <input
//                   key={`${event.id}`}
//                   type="radio"
//                   name="radio-button"
//                   checked={idx === radioIdx}
//                 />
//               ))}
//             </div>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default Slider;

import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus.slice().sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0));
    }, 5000);
    return () => clearTimeout(timer);
  }, [index, byDateDesc?.length]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.id}>
          <div
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{event.date ? getMonth(new Date(event.date)) : "Date unavailable"}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((dot) => (
                <input
                  key={`radio-${event.id}`}
                  type="radio"
                  name="radio-button"
                  checked={index === byDateDesc.indexOf(dot)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
