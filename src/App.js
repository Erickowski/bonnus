import FacebookLogin from "react-facebook-login";

function App() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <FacebookLogin
        appId="773759290147154"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}

export default App;
