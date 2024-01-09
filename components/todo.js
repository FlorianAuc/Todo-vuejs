const template = `
    <li class="is-flex is-justify-content-space-between is-align-items-center mb-2">
        <span class="is-size-5">{{ todo.label }}</span>
        <div>
            <button class="button is-success is-small mr-2" @click.prevent="update">{{ todo.done ? "Terminée" : "À faire" }}</button>
            <button class="button is-danger is-small">Supprimer</button>
        </div>
    </li>
`
const { defineComponent } = Vue
const todo = defineComponent ({
    name: "todo",
    props: {
        todo: {
            type: Object
        }
    },
    setup(context, {emit}) {
        const update = () => {
            alert('click')
            emit('update')
        }
        return {
            update
        }
    },
    template
})

export default todo