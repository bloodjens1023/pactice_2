import * as React from "react";
import "./styles.css";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { initial, reducer } from "./reducer";
import { fruit } from "./fruit";
import Switch from "./Switch";

export default function Model() {
  const [state, dispatch] = React.useReducer(reducer, initial);
  const [desable, setDesable] = React.useState(false);
  const [oui, setOui] = React.useState(false);
  const [count, setCount] = React.useState([]);

  React.useEffect(() => {
    // Add initial items
    for (let i = 0; i < 3; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin1, x: 16, y: 1 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin2, x: 17, y: 1 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin3, x: 18, y: 1 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin4, x: 16, y: 2 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin5, x: 17, y: 2 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin6, x: 18, y: 2 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin7, x: 16, y: 3 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin8, x: 17, y: 3 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.coin9, x: 18, y: 3 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.porte1, x: 17, y: 5 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.porte2, x: 17, y: 6 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.porte3, x: 16, y: 6 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.porte4, x: 16, y: 5 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.fen1, x: 19, y: 5 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.fen2, x: 19, y: 6 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.fen3, x: 16, y: 8 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.fen4, x: 17, y: 8 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.fen5, x: 16, y: 9 } },
      });
      dispatch({
        type: "ADD_ITEM",
        payload: { item: { ...fruit.fen6, x: 17, y: 9 } },
      });
    }
  }, []);

  const draggingItem = state.items.find((i) => i.id === state.dragging?.id);

  const handleDragEnd = (item) => {
    console.log(item);
    if (
      item.id == "porte1" ||
      item.id == "porte2" ||
      item.id == "porte3" ||
      item.id == "porte4"
    ) {
      const newArray = [...count];
      // Ajouter un nouvel objet au tableau
      newArray.push(item);

      setCount(newArray);
    }
  };

  return (
    <Wrapper>
      <GridLayer>
        {state.cells.map((row, y) =>
          row.map((_, x) => <Cell key={`${y}_${x}`} />)
        )}
      </GridLayer>

      <div>
        {state.dragging && draggingItem && (
          <>
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "rgba(239, 239, 239,.8)",
                x: state.dragging.initialPoint.x * 44,
                y: state.dragging.initialPoint.y * 44,
                width: draggingItem.width * 44 - 2,
                height: draggingItem.height * 44 - 2,
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                border: "1px solid #000",
                backgroundColor: state.dragging.valid
                  ? "rgb(152, 195, 121)"
                  : "rgb(224, 109, 118)",
                x: state.dragging.nextPoint.x * 44,
                y: state.dragging.nextPoint.y * 44,
                width: draggingItem.width * 44 - 2,
                height: draggingItem.height * 44 - 2,
              }}
            />
          </>
        )}
        {state.items.map((item) => {
          const x = item.x * 44;
          const y = item.y * 44;
          if (desable && x > 700) {
            return null;
          }
          const width = item.width * 44 - 2;
          const height = item.height * 44 - 2;
          const isDragging = item.id === state.dragging?.id;
          return (
            <motion.div
              drag
              dragMomentum={false}
              onDragStart={() => {
                dispatch({ type: "DRAG_STARTED", payload: { item } });
                console.log(item.x);
                if (item.x < 14) {
                  setOui(true);
                }
              }}
              onDragEnd={() => {
                dispatch({ type: "DRAG_ENDED", payload: { item } });
                if (!oui) {
                  handleDragEnd(item);
                } else {
                  setOui(false);
                }
              }}
              onDrag={(_, info) => {
                const point = {
                  x: Math.min(
                    Math.max(Math.round((x + info.point.x) / 44), 0),
                    15 - item.width
                  ),
                  y: Math.min(
                    Math.max(Math.round((y + info.point.y) / 44), 0),
                    15 - item.height
                  ),
                };
                if (state.dragging) {
                  const { nextPoint } = state.dragging;
                  if (point.x !== nextPoint.x || point.y !== nextPoint.y) {
                    dispatch({
                      type: "DRAG_MOVED",
                      payload: { item, point },
                    });
                  }
                }
              }}
              onAnimationComplete={() => dispatch({ type: "ANIMATION_ENDED" })}
              initial={false}
              animate={!isDragging}
              style={{
                position: "absolute",
                top: y,
                left: x,
                width,
                height,

                backgroundImage: "url(" + item.lien + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                textAlign: "right",
                padding: "2px 4px",
                zIndex: isDragging ? 99 : 1,
              }}
            >
              {item.id === "porte1" && (
                <div
                  style={{
                    backgroundColor: "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "30px",
                  }}
                ></div>
              )}
              {item.id === "porte2" && (
                <div
                  style={{
                    backgroundColor: "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "30px",
                  }}
                ></div>
              )}
              {item.id === "porte3" && (
                <div
                  style={{
                    backgroundColor: "red",
                    width: "10px",
                    height: "10px",
                    borderRadius: "30px",
                  }}
                ></div>
              )}
            </motion.div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 20,

          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {count.map((item, index) => (
          <>
            <Switch nom={item.id} id={index + 1} />
            <br />
          </>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  overflow: hidden;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-gap: 2px;
  grid-auto-rows: 42px;
  grid-template-columns: repeat(15, 42px);
`;

const Cell = styled.div`
  border: 1px solid #ccc;
`;
