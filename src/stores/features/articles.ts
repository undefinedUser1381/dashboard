import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleType } from "@/interfaces/article";
import { apiRequest } from "@/services/axios/configs/apiConfig";

interface initStates {
   isLoad : boolean
   isLoadPost : boolean
   articles : ArticleType[]
   error : null | string
}

const initialState : initStates = {
    isLoad : false,
    isLoadPost : false,
    articles : [],
    error : null
}

export const getArticles = createAsyncThunk(
    "articles/getArticles",
    async (url : string) => {
        const response = await apiRequest.get(url)
        return response.data
    }
)

export const postArticles = createAsyncThunk(
  "articles/postArticles",
  async ({ title , description , duration , author , imgSrc , category } : ArticleType) => {
      const response = await apiRequest.post("articles" , {
        title,
        category,
        description,
        duration,
        author,
        imgSrc
      })
      return response.data
  }
)

export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async (id : string) => {
    const response = await apiRequest.delete(`articles/${id}`)
    return response.data
  }
)

const articleSlice = createSlice({
    name : "articles" ,
    initialState,
    reducers : {},
    extraReducers(builder) {
      builder.addCase(getArticles.fulfilled , (state , action) => {
        state.articles = action.payload
        state.isLoad = false
        state.error = null
      })
      builder.addCase(getArticles.pending , (state , action) => {
        state.isLoad = true
        state.error = null
      })
      builder.addCase(getArticles.rejected , (state , action) => {
        state.isLoadPost = false
        state.error = action.error.message
      })
      builder.addCase(postArticles.fulfilled , (state , action) => {
        state.articles.push(action.payload)
        state.isLoadPost = false
        state.error = null
      })
      builder.addCase(postArticles.pending , (state , action) => {
        state.isLoadPost = true
        state.error = null
      })
      builder.addCase(postArticles.rejected , (state , action) => {
        state.isLoad = false
        state.error = action.error.message
      })
      builder.addCase(deleteArticle.fulfilled , (state , action) => {
        state.isLoad = false
        state.error = null
        state.articles = state.articles.filter(article => article.id !== action.meta.arg)
      })
      builder.addCase(deleteArticle.pending , (state , action) => {
        state.isLoad = true
        state.error = null
      })
      builder.addCase(deleteArticle.rejected , (state , action) => {
        state.isLoad = false
        state.error = action.error.message
      })
    },
})

export default articleSlice.reducer;
