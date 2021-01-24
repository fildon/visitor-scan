const StorageContentsTable = ({ localStorage }: { localStorage: Storage }) => (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
      {Object.entries(localStorage).map(([name, value]) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{JSON.stringify(value)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const LocalStorage = ({ localStorage }: { localStorage: Storage }) => (
  <section>
    <h2>Local Storage</h2>
    {Object.keys(localStorage).length ? (
      <StorageContentsTable localStorage={localStorage} />
    ) : (
      <span>Nothing found in local storage!</span>
    )}
  </section>
);

export default LocalStorage;
