import * as React from "react";
import { Field, Dropdown, Option, useId } from "@fluentui/react-components";

const dropdownId = useId("liedboek-dropdown");

const songbooks: { key: string; text: string }[] = [
  { key: "ob", text: "Berijming 1773" },
  { key: "nb", text: "Berijming 1967" },
  { key: "lvdk", text: "Liedboek voor de Kerken" },
];

const SongSelect: React.FC = () => {
  return (
    <section>
      <label id={dropdownId}>Liedboek</label>
      <Dropdown aria-labelledby={dropdownId} placeholder="Kies een liedboek">
        {songbooks.map((s) => (
          <Option key={s.key}>{s.text}</Option>
        ))}
      </Dropdown>
      <Field></Field>
    </section>
  );
};

export default SongSelect;
