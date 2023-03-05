export default class App {
    $target

    constructor($target) {
        this.$target = $target
        this.render()
    }
    
    render() {
        this.$target.appendChild(asd)
    }
}