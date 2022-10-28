import React, { useState } from "react";
import '../index.css'


export const Calculator = () => {
  const [digits, setDigits] = useState("");

  const handleClick = ({ target }) => {
    const value = target.value;
    setDigits(digits + value);
  };

  const clear = () => {
    setDigits("");
  };
  const calculate = () => {
    const answer = eval(digits);
    setDigits(answer);
  };
  const operation = ({ target }) => {
    const value = target.value;
    setDigits(digits + "" + value + "");
  };

  return (
    <div className="container">
      <div>
        <div className="card">
          <div className="row">
            <div className="col-12">
              <input type="text" className="total" value={digits} />
            </div>
            <div className="col-12">
              <input type="text" value={digits} className="inputVal" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-danger" onClick={clear}>
                AC
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-secondary"
                value="/"
                onClick={operation}
              >
                /
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-secondary"
                value="*"
                onClick={operation}
              >
                X
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="7"
                onClick={handleClick}
              >
                7
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="8"
                onClick={handleClick}
              >
                8
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="9"
                onClick={handleClick}
              >
                9
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-secondary"
                value="-"
                onClick={operation}
              >
                -
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="4"
                onClick={handleClick}
              >
                4
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="5"
                onClick={handleClick}
              >
                5
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="6"
                onClick={handleClick}
              >
                6
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-secondary"
                value="+"
                onClick={operation}
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="1"
                onClick={handleClick}
              >
                1
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="2"
                onClick={handleClick}
              >
                2
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="3"
                onClick={handleClick}
              >
                3
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={calculate}
              >
                =
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-dark"
                value="0"
                onClick={handleClick}
              >
                0
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark"
                value="."
                onClick={handleClick}
              >
                .
              </button>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={calculate}
              >
                =
              </button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h6 className="text-center">Design and coded by</h6>
          <p className="text-center">Twalib Nurrein</p>
        </div>
      </div>
    </div>
  );
};
