import * as axios from "axios";


const instance = axios.create(
	{
		withCredentials: true,
		baseURL: `https://social-network.samuraijs.com/api/1.0/`,
		headers: {
			"API-KEY": "bb091a27-1611-4ecb-ae61-e8056be62c39"
		}
	}
);

export const usersAPI = {
	getUsers ( pageSize= 10, currentPage = 1) {
		return instance.get(`users?count=${pageSize}&page=${currentPage}`)
			.then(response => {
				return response.data;
			});
	},

	follow (userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow (userId) {
		return instance.delete(`follow/${userId}`)
	},
	getUserProfile(userId){
		return instance.get(`profile/${userId}`)
	}
}

export const authAPI = {
	authMe(){
		return instance.get(`auth/me`)
	}
}
