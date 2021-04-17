import { ReactNode } from 'react';
import blurryface from '../../assets/images/albuns-cover/blurryface.jpg';
import scaled_and_Icy from '../../assets/images/albuns-cover/scaled_and_Icy.jpg';
import trench from '../../assets/images/albuns-cover/trench.jpg';
import { Container } from './styles';



interface NavBarProps {
  children: ReactNode;
}

function NavBar() {
  return (
    <Container>
      <div className="content">
        <div className="content-title">
          <h1>Twenty One Pilots</h1>
        </div>

        <div className="content-albuns">

          <div className="content-albuns-blurryface">
            <h1>Blurryface</h1>
            <img src={blurryface} alt="Clique aqui para saber sobre o album" />
          </div>

          <div className="content-albuns-trench">
            <h1>Trench</h1>
            <img src={trench} alt="Clique aqui para saber sobre o album" />
          </div>

          <div className="content-albuns-icy">
            <h1>Scaled and  Icy</h1>
            <img src={scaled_and_Icy} alt="Clique aqui para saber sobre o album" />
          </div>


        </div>
      </div>


    </Container>
  );
};

export default NavBar;
