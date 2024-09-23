const Card = ({
  title = "default title",
  description = "default description",
  footer = "default footer",
}) => {
  return `
        <div class="card">
             <div class="container">
                <h4><b>${title}</b></h4>
                <p>Architect & Engineer</p>
            </div>
            <div class="container">
                <p>${description}</p>
                <p>${footer}</p>
                </div>
        </div>
    `;
};

export default Card;
