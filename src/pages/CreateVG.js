export const Link = '/';

const CreateVG = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const vg_form = new FormData(form);
      const name = vg_form.get('name');
      const editor = vg_form.get('editor');
      const platform = vg_form.get('platform');
      const release_date = vg_form.get('release_date');
      fetch('https://crudcrud.com/api/3f31560fd0a0437d8310c505226cecde/vg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          editor,
          platform,
          release_date
        })
      }).then((response) => {
        response
          .json()
          .then((data) => {
            console.log(data);
            // window.location.href = '/list_vg';
            history.pushState(null, '', '/list_vg');
          })
          .catch((error) => console.log(error));
      });
    });
  });

  return `
    <form id="vg_form">
      <h1>Création de votre jeu</h1>
      <label for="name">Nom du jeu</label>
      <input type="text" id="name" name="name" required />
      <label for="editor">Editeur</label>
      <input type="text" id="editor" name="editor" required />
      <label for="release_date">Date de sortie</label>
      <input type="date" id="release_date" name="release_date" required />
      <label for="platform">Plateforme</label>
      <input type="text" id="platform" name="platform" required />
      <button>Créer</button>
    </form>
  `;
};

export default CreateVG;
