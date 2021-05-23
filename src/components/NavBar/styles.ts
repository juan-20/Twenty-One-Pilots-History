import styled from 'styled-components';

export const Container = styled.div`

background: #161B22;
width: 100%;
height: 250px;
margin: 0;

.content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

&-title{
    align-items: flex-start;
    color: #fff;
}

&-albuns{
    cursor: pointer;
    width: 50%;
    height:100%;
    background: green;
    display: flex;
    flex-direction: row;

&-blurryface{
    width: 250px;
    background: #F74B39;
    box-sizing: border-box;
    >h1{
        position: absolute;
        color: #000;
        z-index: 1;
     transition: 0.5s linear;
    }
    >img{
        width: 100%;
        opacity: 0;
        transition: 0.5s linear;
    }

    :hover{
    >img{
        opacity: 1;
    }
    >h1{
        position: absolute;
        color: #F74B39;
        z-index: 1;
    }
    }

}

&-trench{
    width: 250px;
    background: #E0CD1A;
    box-sizing: border-box;
    >h1{
        position: absolute;
        color: #000;
        z-index: 1;
     transition: 0.5s linear;
    }
    >img{
        width: 100%;
        opacity: 0;
        transition: 0.5s linear;
    }

    :hover{
    >img{
        opacity: 1;
    }
    >h1{
        position: absolute;
        color: #E0CD1A;
        z-index: 1;
    }
    }

}

&-icy{
    width: 250px;
    background: rgb(245,123,171);
background: linear-gradient(90deg, rgba(245,123,171,1) 0%, rgba(131,204,221,1) 100%);
    box-sizing: border-box;
    >h1{
        position: absolute;
        color: #000;
        z-index: 1;
     transition: 0.5s linear;
    }
    >img{
        width: 100%;
        opacity: 0;
        transition: 0.5s linear;
    }

    :hover{
    >img{
        opacity: 1;
    }
    >h1{
        position: absolute;
        color: #000;
        z-index: 1;
    }
    }

}
}

&-burger{
    display: none;
}

}


@media only screen and (max-width: 600px) {
     *{
         >h1{
             font-size: 0.8rem;
         }
     }
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
     .content{
         &-title{
             font-size: 1.2rem;
         }
         &-albuns{
            display: none;
         }

         &-burger{
             display: inline;
                padding-right: 40px;
                font-size: 1.2rem;
                &-btn{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
             
            
         }
     }

     
}

`;
