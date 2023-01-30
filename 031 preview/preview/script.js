const btn = document.querySelector('button');

// btn.onclick = function () {
//     alert('gfdbhsnm');
// }

const deleteElement = (e) => {
    e.target.remove();
};

btn.addEventListener('click', deleteElement);

