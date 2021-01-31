import ExampleElements from "../components/ExampleElements";

const Landing = () => {
  return (
    <ExampleElements>
      <section className="section--intro flex-col">
        <div className="wrap">
          <h1>Verlay002</h1>
          <p>Follow the signs</p>
        </div>
      </section>

      <section className="section--paragraph flex-col">
        <div className="wrap">
          <p>Listen to your gut</p>
        </div>
      </section>

      <section className="section--third">
        <div className="wrap">
          <div className="flex-col">
            <p>Why the hell not</p>
          </div>
        </div>
      </section>
    </ExampleElements>
  );
};

export default Landing;
