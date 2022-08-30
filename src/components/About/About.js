import "./About.css";

const About = () => {
  return (
    <main>
      <p className="statement">
        This world is viewed so differently by each and everyone of us. We need to continue to find ways to find joy and "See the Light" amongst the darkness. I dedicate this application to those who suffer with mental illness. 
      </p>
      <table>
        <thead>
          <tr>
            <th>Creator</th>
            <th>Contact</th>
            <th>Acknowledgments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>time2fishman</td>
            <td><a href="https://www.linkedin.com/in/adam-martinez/">LinkedIn</a></td>
            <td>https://zenquotes.io/</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default About;
