const inpElement = document.getElementById('email-inp');

const verifyURL = "https://emailvalidation.abstractapi.com/v1/?api_key=e1cc21d8e4ff46dc8ef9a5f6a1005651&email="


const spanElement = document.createElement('span');
spanElement.style.color = "#fff";
spanElement.style.padding = "16px";
spanElement.style.margin = "16px";


const verifyEmail = async () => {
  const response = await fetch(`${verifyURL}${inpElement.value}`);
  const data = await response.json();

  spanElement.innerText = data.email;
  if(data.deliverability === "DELIVERABLE") {
    spanElement.classList.add('bg-success');
  } else {
    spanElement.classList.add('bg-danger');
  }
}

document.body.append(spanElement);
