import Head from "next/head";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  const rotateCardBack = () => {
    const back = document.getElementById("back");
    const front = document.getElementById("front");

    front.style.transform = `rotateY(-180deg)`;
    back.style.transform = "rotateY(0)";
  };

  const rotateCardFront = () => {
    const back = document.getElementById("back");
    const front = document.getElementById("front");

    front.style.transform = `rotateY(0)`;
    back.style.transform = "rotateY(-180deg)";
  };

  return (
    <div>
      <Head>
        <title>Home | Whatsapp Clone</title>
        <meta name="description" content="turu" />
        <link rel="icon" href="/wangsaf.png" />
      </Head>
      <DefaultContainer>
        <Sidebar />
        <DefaultHome>
          <div className="card">
            <div className="card__side  card__side--back" id="back">
              <div className="backtofront" onClick={rotateCardFront}>
                &larr;
              </div>
              <h4
                style={{
                  margin: "8rem 3rem 0 3rem",
                  fontSize: "2rem",
                  borderBottom: "1px solid gray",
                  paddingBottom: ".7rem",
                  letterSpacing: ".6px",
                }}
              >
                Current Features :
              </h4>
              <ul
                style={{
                  fontSize: 15.5,
                  color: "#343A40",
                  margin: "1.5rem 0 0 5.5rem",
                  lineHeight: 1.6,
                }}
              >
                <li>Login & Logout</li>
                <li>Add Chat</li>
                <li>Search Chat</li>
                <li>Delete Chat</li>
                <li>Chat with individual user</li>
                <li>Send Emoji&apos;s</li>
                <li>Auto scroll to last message</li>
              </ul>
              <p
                style={{
                  borderBottom: "1px solid gray",
                  margin: "2.5rem 3rem 0 3rem",
                }}
              ></p>
              <p
                style={{
                  textAlign: "center",
                  display: "flex",
                  marginTop: "1rem",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://github.com/Nivth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons8-github.svg"
                    alt="github"
                    height={40}
                    width={40}
                  />
                </a>
              </p>
            </div>
            <div className="card__side card__side--front" id="front">
              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    margin: "2rem 15rem -13px 15rem",
                    fontSize: "2.5rem",
                    border: "3.5px solid",
                    borderImageSlice: 1,
                    borderImageSource:
                      "linear-gradient(to left, #743ad5, #d53a9d)",
                    display: "inline-block",
                    padding: ".6rem",
                  }}
                >
                  Hi There ! 👋👋👋
                </h3>
                <Image
                  src="/wangsaf.png"
                  style={{
                    margin: "30px",
                    borderRadius: "50%",
                  }}
                  height={200}
                  width={200}
                />
                <p
                  style={{
                    margin: "0rem 3rem 2rem 3rem",
                    letterSpacing: "0px",
                    fontSize: "1.6rem",
                    lineHeight: 1.5,
                    color: "#212529",
                    textAlign: "left",
                  }}
                >
                  Welcome to the Whatsapp clone made from Next JS, React JS and
                  Firebase. This was originally developed by{" "}
                  <a
                    href="https://github.com/Nivth"
                    rel="noreferrer"
                    target="_blank"
                    style={{ color: "#006aff", cursor: "pointer" }}
                  >
                    @Nivth
                  </a>{" "}
                  .
                </p>
                <p
                  style={{
                    margin: "2rem 3rem 2rem 3rem",
                    fontSize: "1.6rem",
                    letterSpacing: "0px",
                    lineHeight: 1.5,
                    color: "#212529",
                    textAlign: "left",
                  }}
                >
                  I dont know what to write here, and maybe i'll sleep.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5rem",
                  }}
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={rotateCardBack}
                    style={{
                      padding: "1.2rem 2rem",
                      backgroundColor: "rebeccapurple",
                      border: "0px",
                      outline: 0,
                      color: "#fff",
                      borderRadius: "5px",
                      fontSize: "1.7rem",
                      cursor: "pointer",
                    }}
                  >
                    Know More &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DefaultHome>
      </DefaultContainer>
    </div>
  );
}

const DefaultContainer = styled.div`
  display: flex;
`;

const DefaultHome = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

// const InfoBox = styled.div`
//   height: 60rem;
//   width: 56rem;
//   background-color: #99d98c;
//   font-weight: 500;
//   font-size: 1.4rem;
//   border-radius: 1rem;
//   box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.19);
// `;
