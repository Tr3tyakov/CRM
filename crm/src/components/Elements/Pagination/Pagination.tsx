import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./pagination.scss";
import leftArrow from "../../../images/leftAngle.svg";
import rightArrow from "../../../images/rightAngle.svg";
import Box from "../Box/Box";
import Bubble from "../Bubble/Bubble";

interface IPagination {
  quantity: number;
  arrows?: boolean;
}

const Pagination: React.FC<IPagination> = ({ quantity, arrows }) => {
  const [state, setState] = React.useState<number[]>([]);

  React.useEffect(() => {
    const arrayOfNumbers: number[] = [];

    for (let i = 1; i <= quantity; i++) {
      arrayOfNumbers.push(i);
      if (i === quantity) {
        setState(arrayOfNumbers);
      }
    }
  }, [quantity]);

  return (
    <Box display="flex" wrap="wrap" justify="space-between" gap="5px">
      <Box
        className="pagination"
        display="flex"
        wrap="wrap"
        justify="flex-start"
        align="center"
        gap="5px"
        m="10px 0"
      >
        {arrows && (
          <Bubble className="image-container">
            <ImageContainer
              image={leftArrow}
              width="auto"
              height="40px"
              imgWidth="50%"
              imgHeight="50%"
              typography="Назад"
              orientationTypography="left"
              alt="arrow"
            />
          </Bubble>
        )}
        {state.map((element, index) => (
          <Bubble className="pagination__block" key={index}>
            <p>{element}</p>
          </Bubble>
        ))}
        {arrows && (
          <Bubble className="image-container">
            <ImageContainer
              image={rightArrow}
              width="auto"
              height="40px"
              imgWidth="50%"
              imgHeight="50%"
              typography="Вперед"
              orientationTypography="right"
              alt="arrow"
            />
          </Bubble>
        )}
      </Box>
      <Box display="flex" justify="flex-start" align="center" gap="10px">
        <p>Показано 1-7 из 100 записей</p>
        <input type="number" />
      </Box>
    </Box>
  );
};

export default Pagination;
