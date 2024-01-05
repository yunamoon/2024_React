import CheckBoxField from "./CheckBoxField";

export default function SearchBar() {

    return (
        <div className="search-bar">
        <div>
          <input type="text" placeholder="search..."></input>
        </div>
         <CheckBoxField label="어쩌구 저쩌구" />
      </div>
    )
}