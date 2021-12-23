import minifyCSS from '../helpers/minify-css'
const css = 
`.example {
  font-size:90px;
  color : yellow;
}
  .example2 {
    font-size:30px;
    color :blue;
  }
}
`
//compress css
const stylesheet = minifyCSS(css)

const Style = () => {
  return <style>{stylesheet}</style>
}
export default Style
