const Block = () => {
  const blocks = [
    {
      iconSrc: "🏗️", // Replace with a construction helmet icon
      bgColor: "#F3F7F9",
      title: "Architectural Planning",
    },
    {
      iconSrc: "🧱", // Replace with a bricks or wall icon
      bgColor: "#FFF6F1",
      title: "Masonry & Construction",
    },
    {
      iconSrc: "🚧 ", // Replace with a crane or machinery icon
      bgColor: "#F9F6FF",
      title: "Heavy Equipment & Logistics",
    },
  ];

  return (
    <>
      {blocks.map((block, index) => (
        <div
          key={index}
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div
            className="card-style-six md-mt-30 text-center"
            style={{ backgroundColor: block.bgColor }}
          >
            <div className="icon d-flex align-items-end justify-content-center" style={{ fontSize: "40px", height: "60px" }}>
              {block.iconSrc.startsWith("http") || block.iconSrc.includes("/") ? (
                <img src={block.iconSrc} alt="icon" className="lazy-img" style={{ maxHeight: "100%" }} />
              ) : (
                <span>{block.iconSrc}</span>
              )}
            </div>
            <h4 className="mt-55 lg-mt-30">{block.title}</h4>
          </div>
        </div>
      ))}

    </>
  );
};

export default Block;
