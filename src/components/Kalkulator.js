import React, { useState } from 'react';

import classes from './Kalkulator.module.css';

const Kalkulator = () => {
  const [inputData1, setInputData1] = useState(0);
  const [inputData2, setInputData2] = useState(0);
  const [inputData3, setInputData3] = useState(0);

  const [dataPerhitungan, setDataPerhitungan] = useState(0);

  const [cek1, setCek1] = useState(false);
  const [cek2, setCek2] = useState(false);
  const [cek3, setCek3] = useState(false);

  let num1 = null;
  let num2 = null;
  let num3 = null;

  let counter = 0;
  let hasilNum = 0;
  let hasilPerhitungan = 0;

  const inputData1ChangeHandler = (event) => {
    setInputData1(event.target.value);
  };

  const inputData2ChangeHandler = (event) => {
    setInputData2(event.target.value);
  };

  const inputData3ChangeHandler = (event) => {
    setInputData3(event.target.value);
  };

  const ceklist1Handler = (e) => {
    setCek1(e.target.checked);
  };

  const ceklist2Handler = (e) => {
    setCek2(e.target.checked);
  };

  const ceklist3Handler = (e) => {
    setCek3(e.target.checked);
  };

  if (cek1 === true) {
    num1 = inputData1 * 1;
    counter = counter + 1;
  }

  if (cek1 === false && counter !== 0) {
    num1 = null;
    counter = counter - 1;
  }

  if (cek2 === true) {
    num2 = inputData2 * 1;
    counter = counter + 1;
  }

  if (cek1 === false && counter !== 0) {
    num2 = null;
    counter = counter - 1;
  }

  if (cek3 === true) {
    num3 = inputData3 * 1;
    counter = counter + 1;
  }

  if (cek1 === false && counter !== 0) {
    num3 = null;
    counter = counter - 1;
  }

  const buttonTambahHandler = (event) => {
    event.preventDefault();

    switch (counter) {
      case 0:
        alert('Checkbox harus diisi');
        break;
      case 1:
        alert('Minimal 2 inputan!');
        break;
      default:
        if (num1 !== null) {
          hasilNum = num1;
          if (num2 !== null) {
            hasilNum = hasilNum + num2;
          }
          if (num3 !== null) {
            hasilNum = hasilNum + num3;
          }
        } else {
          if (num2 !== null) {
            hasilNum = num2;
            if (num3 !== null) {
              hasilNum = hasilNum + num3;
            }
          }
        }
        hasilPerhitungan = hasilNum;
    }
    setDataPerhitungan(hasilPerhitungan);
  };

  const buttonPenguranganHandler = (event) => {
    event.preventDefault();

    switch (counter) {
      case 0:
        alert('Checkbox harus diisi');
        break;
      case 1:
        alert('Minimal 2 inputan!');
        break;
      default:
        if (num1 !== null) {
          hasilNum = num1;
          if (num2 !== null) {
            hasilNum = hasilNum - num2;
          }
          if (num3 !== null) {
            hasilNum = hasilNum - num3;
          }
        } else {
          if (num2 !== null) {
            hasilNum = num2;
            if (num3 !== null) {
              hasilNum = hasilNum - num3;
            }
          }
        }
        hasilPerhitungan = hasilNum;
    }
    setDataPerhitungan(hasilPerhitungan);
  };

  const buttonPerkalianandler = (event) => {
    event.preventDefault();

    switch (counter) {
      case 0:
        alert('Checkbox harus diisi');
        break;
      case 1:
        alert('Minimal 2 inputan!');
        break;
      default:
        if (num1 !== null) {
          hasilNum = num1;
          if (num2 !== null) {
            hasilNum = hasilNum * num2;
          }
          if (num3 !== null) {
            hasilNum = hasilNum * num3;
          }
        } else {
          if (num2 !== null) {
            hasilNum = num2;
            if (num3 !== null) {
              hasilNum = hasilNum * num3;
            }
          }
        }
        hasilPerhitungan = hasilNum;
    }
    setDataPerhitungan(hasilPerhitungan);
  };

  const buttonPembagianHandler = (event) => {
    event.preventDefault();

    switch (counter) {
      case 0:
        alert('Checkbox harus diisi');
        break;
      case 1:
        alert('Minimal 2 inputan!');
        break;
      default:
        if (num1 !== null) {
          hasilNum = num1;
          if (num2 !== null) {
            hasilNum = hasilNum / num2;
          }
          if (num3 !== null) {
            hasilNum = hasilNum / num3;
          }
        } else {
          if (num2 !== null) {
            hasilNum = num2;
            if (num3 !== null) {
              hasilNum = hasilNum / num3;
            }
          }
        }
        hasilPerhitungan = hasilNum;
    }
    setDataPerhitungan(hasilPerhitungan);
  };

  return (
    <form className={classes.form}>
      <div className={classes['control-input']}>
        <div className={classes['control-input-group']}>
          <input
            type='number'
            className='form-control'
            onChange={inputData1ChangeHandler}
          />
          <input
            className='form-check-input'
            type='checkbox'
            checked={cek1}
            onChange={ceklist1Handler}
          />
        </div>
        <div>
          <input
            type='number'
            className='form-control'
            onChange={inputData2ChangeHandler}
          />
          <input
            className='form-check-input'
            type='checkbox'
            checked={cek2}
            onChange={ceklist2Handler}
          />
        </div>
        <div>
          <input
            type='number'
            className='form-control'
            onChange={inputData3ChangeHandler}
          />
          <input
            className='form-check-input'
            type='checkbox'
            checked={cek3}
            onChange={ceklist3Handler}
          />
        </div>
      </div>
      <div className={classes['control-btn']}>
        <button type='button' className='btn' onClick={buttonTambahHandler}>
          +
        </button>
        <button
          type='button'
          className='btn'
          onClick={buttonPenguranganHandler}>
          -
        </button>
        <button type='button' className='btn' onClick={buttonPerkalianandler}>
          x
        </button>
        <button type='button' className='btn' onClick={buttonPembagianHandler}>
          /
        </button>
      </div>
      <hr />
      <div>
        <div className={classes.value}>Hasil : {dataPerhitungan}</div>
      </div>
    </form>
  );
};

export default Kalkulator;
