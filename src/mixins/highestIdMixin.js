
export const highestIdMixin = {
    data(){
        return {
            title: 'Mixins are cool',
            copyright: 'All rights reserved. Product of super awesome people'
        }
    },
    computed: {
        getId: function(array){
            console.log('array in mixin', array)
            if(array){
                let itemsById = array?.sort((a,b)=> a.id-b.id)
                let lastItem = itemsById[itemsById.length - 1]
                let lastId = lastItem?.id

                console.log('lastId', lastId)
                return  lastId
            }
        },

    }
}
