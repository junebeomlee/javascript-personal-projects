export default function Button() {
    
    const initalState = {
        count: 0,
        onClick: () => {
            const { count } = this.state
            this.setSTate({
                ...this.state,
                count: count + 1
            })
        }
    }
    this.state = initalState

    this.setSTate = newState => {
        this.state = {
            ...this.state,
            ...newState
        }
    }
}