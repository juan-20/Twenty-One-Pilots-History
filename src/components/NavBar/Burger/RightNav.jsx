import React from 'react';
import styled from 'styled-components';
import blurryface from '../../../assets/images/albuns-cover/blurryface.jpg';
import scaled_and_Icy from '../../../assets/images/albuns-cover/scaled_and_Icy.jpg';
import trench from '../../../assets/images/albuns-cover/trench.jpg';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 100px;
  border: 2px solid transparent;

  li {
    padding: 30px 10px;
  }

  .trench{
    background-color: #E3CE0E;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      font-family: compctak-webfont;
      color: #000;
    }
    >img {
    width: 87px;
    height: 87px;
    justify-content: flex-end;
  }
  }
  .blu{
    background-color: #EA523B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      font-family: compctak-webfont;
      color: #000;
    }
    >img {
    width: 87px;
    height: 87px;
    justify-content: flex-end;
  }
  }
  .sai{
    background: rgb(245,123,171);
background: linear-gradient(90deg, rgba(245,123,171,1) 0%, rgba(131,204,221,1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    li{
      font-family: compctak-webfont;
      color: #000;
    }
    >img {
    width: 87px;
    height: 87px;
    justify-content: flex-end;
  }
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #161B22;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>

      <div className="blu">
        <li>Blurryface
        </li>
        <img src={blurryface} alt="Clique aqui para saber sobre o album Trench" />
      </div>
      <a href="/trench">
        <div className="trench">
          <li>Trench
          </li>
          <img src={trench} alt="Clique aqui para saber sobre o album Trench" />
        </div>
      </a>


      <div className="sai">
        <li>Scaled and Icy</li>
        <img src={scaled_and_Icy} alt="Clique aqui para saber sobre o album Trench" />
      </div>


    </Ul>
  )
}

export default RightNav
