export default function Serach({$target, initialState}) {
    this.$element = document.createElement('form')
    this.$element.className = "Search"
    this.state = initialState

    console.log($target)
    $target.appendChild(this.$element)

    this.render = () => {
        this.$element.innerHTML = `
        <input class="search_input" type="text" placeholder="프로그래밍 언어를 입력하세요"/>
        `
    }
    this.render()
}