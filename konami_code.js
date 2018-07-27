const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init()
{
  let index = 0

  document.addEventListener('keydown', function(e)
  {
    const key = parseInt(e.detail || e.which)
    if (key === code[index])
    {
        index++

        if (code.length - 1 === index)
        {
          alert("YOU DID IT!")
          index = 0
        }
    }
    else
    {
        index = 0
    }
  })
}

init()
  
