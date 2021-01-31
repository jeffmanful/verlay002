import ExampleElements from "../components/ExampleElements";

const Landing = () => {
  return (
    <ExampleElements>
      <section className="section--intro flex-col">
        <div className="wrap">
          <h1>Verlay002</h1>
          <h3>Follow the signs</h3>
        </div>
      </section>

      <section className="section--headers flex-col">
        <div className="wrap">
          <div className="flex-row">
            <div className="flex-col header">
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <h6>Header 6</h6>
            </div>
            <div className="flex-col text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Duis pharetra luctus
                lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere
                ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper
                sagittis id vel leo. Integer feugiat faucibus libero, at maximus
                nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
                turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras
                pharetra mi tristique sapien vestibulum lobortis. Nam eget
                bibendum metus, non dictum mauris. Nulla at tellus sagittis,
                viverra est a, bibendum metus.
              </p>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
                pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper
                sagittis id vel leo. Integer feugiat faucibus libero, at maximus
                nisl suscipit posuere. Morbi nec enim nunc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--paragraph flex-col">
        <div className="wrap">
          <div className="flex-col col1">
            <h3>Listen to your gut</h3>
            <q>
              “Surround yourself with people who make you happy. People who make
              you laugh, who help you when you’re in need. People who genuinely
              care. They are the ones worth keeping in your life. Everyone else
              is just passing through.”
            </q>
            <p>Karl Marx</p>
          </div>
          <div className="flex-col col2">
            <p>
              But by wanting to keep these things fixed, we resist the natural
              way of change.
            </p>
            <p>
              So, instead of continuing this trend, remove the friction by
              releasing attachments and allow yourself to flow with the
              universe.
            </p>
          </div>
        </div>
      </section>

      <section className="section--third">
        <div className="wrap">
          <div className="flex-col col1">
            <h3>Why the hell not</h3>
            <ul>
              <li>
                The way a team plays as a whole determines its success. You may
                have the greatest bunch of individual stars in the world, but if
                they don’t play together, the club won’t be worth a dime. ~ Babe
                Ruth, baseball legend
              </li>
              <li>
                Success is best when it’s shared. ~ Howard Schultz, CEO of
                Starbucks
              </li>
              <li>
                Great companies are built in the office, with hard work put in
                by a team. ~ Emily Chang, journalist and executive producer
              </li>
              <li>
                If you love your work, you’ll be out there every day trying to
                do it the best you possibly can, and pretty soon everybody
                around will catch the passion from you – like a fever. ~ Sam
                Walton, founder of Walmart
              </li>
              <li>
                Nothing is particularly hard if you divide it into small jobs. ~
                Henry Ford, American industrialist
              </li>
            </ul>
          </div>
          <div className="flex-col col2">
            <p>
              Integer feugiat faucibus libero, Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Duis
              pharetra luctus lacus ut vestibulum. Maecenas ipsumat{" "}
              <a href="#">a link within a body of text</a>
              nisl suscipit posuere aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Duis pharetra luctus
              lacus ut vestibulum. Maecenas ipsum.
            </p>

            <button>A button to press</button>
          </div>
        </div>
      </section>
    </ExampleElements>
  );
};

export default Landing;
