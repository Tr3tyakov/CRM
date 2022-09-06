import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./pagination.scss";
import leftArrow from "../../../images/leftAngle.svg";
import rightArrow from "../../../images/rightAngle.svg";

interface IPagination {
  quantity: number;
  arrows?: boolean;
}

const Pagination: React.FC<IPagination> = ({ quantity, arrows }) => {
  const [state, setState] = React.useState<number[]>([]);

  React.useEffect(() => {
    const arrayOfNumbers: number[] = [];

    for (let i: number = 1; i <= quantity; i++) {
      arrayOfNumbers.push(i);
      if (i === quantity) {
        setState(arrayOfNumbers);
      }
    }
  }, [quantity]);
  console.log(state);
  return (
    <>
      <div className="pagination">
        <div className="pagination__first-block">
          {arrows && (
            <ImageContainer
              className="pagination__block"
              image={leftArrow}
              width="40px"
              height="40px"
              alt="arrow"
            />
          )}
          {state.map((element, index) => (
            <div className="pagination__block" key={index}>
              <p>{element}</p>
            </div>
          ))}
          {arrows && (
            <ImageContainer
              className="pagination__block"
              image={rightArrow}
              width="40px"
              height="40px"
              alt="arrow"
            />
          )}
        </div>
      </div>
      <div className="pagination__second-block">
        <div>
          <p>Показано 1-7 из 100 записей</p>
          <input type="number" />
        </div>
      </div>
    </>
  );
};

export default Pagination;
