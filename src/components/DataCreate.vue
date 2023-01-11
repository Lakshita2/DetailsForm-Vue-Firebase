<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Please Enter the details</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label>Book</label>
                    <input type="text" class="form-control" v-model="user.book" required>
                </div>
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" class="form-control" v-model="user.author" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Save Details</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import { db } from '../firebaseDb';
    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("Entry successfully created!");
                    this.user.name = ''
                    this.user.email = ''
                    this.user.book = ''
                    this.user.author = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>