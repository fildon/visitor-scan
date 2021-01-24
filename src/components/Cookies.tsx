type Cookie = {
  name: string;
  value: string;
};

const parseStringToCookies = (cookieString: string): Cookie[] =>
  cookieString.split("; ").map((namevalue) => {
    const [name, value] = namevalue.split("=");
    return { name, value };
  });

const CookiesTable = ({ cookies }: { cookies: Cookie[] }) => (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
      {cookies.map(({ name, value }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Cookies = ({ cookieString }: { cookieString: string }) => (
  <section>
    <h2>Cookies</h2>
    {cookieString.trim() ? (
      <CookiesTable cookies={parseStringToCookies(cookieString)} />
    ) : (
      <span>No cookies found!</span>
    )}
  </section>
);

export default Cookies;
