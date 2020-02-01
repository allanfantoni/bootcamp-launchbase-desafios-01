const usuarios = [
  {
    nome: 'Carlos',
    tecnologias: ['HTML', 'CSS']
  },
  {
    nome: 'Jasmine',
    tecnologias: ['JavaScript', 'CSS']
  },
  {
    nome: 'Tuane',
    tecnologias: ['HTML', 'Node.js']
  }
];

for (let index = 0; index < usuarios.length; index++) {
  // console.log(`${usuarios[index].nome} trabalha com ${usuarios[index].tecnologias[0]}, ${usuarios[index].tecnologias[1]}`);
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[index]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[index].nome} trabalha com CSS`);
  }
}

function checaSeUsuarioUsaCSS(usuario) {
  for (let index = 0; index < usuario.tecnologias.length; index++) {
    if (usuario.tecnologias[index] === 'CSS') {
      return true;
    }
  }

  return false;
}