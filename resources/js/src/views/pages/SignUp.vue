<template>
    <div class="container">
        <div v-if="serverError" class="alert alert-danger" role="alert">
            <ul v-for="(value, key) in serverError" :key="key">
                <li>{{ value[0] }}</li>
            </ul>
        </div>
        <form @submit.prevent="register">
            <div class="form-group">
                <label>Name</label>
                <input type="text" v-model="name" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" placeholder="email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
                <label>Repeat Password</label>
                <input type="password" v-model="c_password" class="form-control" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data () {
        return {
            email: '',
            name: '',
            password: '',
            c_password: '',
            serverError: '',
            successMessage: ''
        }
    },
    methods: {
        register() {
        this.$store.dispatch('register', {
            name: this.name,
            email: this.email,
            password: this.password,
            c_password: this.c_password
        })
            .then(response => {
                        this.successMessage = 'Pendaftaran berhasil, silahkan login'
                        this.$router.push({ name: 'Signin', params: {dataSuccessMessage: this.successMessage} })
                    })
                    .catch(error => {
            this.serverError = Object.values(error.response.data.errors)
            })
        }
    }
}
</script>
