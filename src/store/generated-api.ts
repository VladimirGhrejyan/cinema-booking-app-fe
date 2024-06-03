import { api } from './api';
export const addTagTypes = ['schedule', 'room', 'movie'] as const;
const injectedRtkApi = api
    .enhanceEndpoints({
        addTagTypes,
    })
    .injectEndpoints({
        endpoints: (build) => ({
            getScheduleById: build.query<GetScheduleByIdApiResponse, GetScheduleByIdApiArg>({
                query: (queryArg) => ({ url: `/schedule/${queryArg.id}` }),
                providesTags: ['schedule'],
            }),
            updateSchedule: build.mutation<UpdateScheduleApiResponse, UpdateScheduleApiArg>({
                query: (queryArg) => ({
                    url: `/schedule/${queryArg.id}`,
                    method: 'PATCH',
                    body: queryArg.updateScheduleInputDto,
                }),
                invalidatesTags: ['schedule'],
            }),
            deleteSchedule: build.mutation<DeleteScheduleApiResponse, DeleteScheduleApiArg>({
                query: (queryArg) => ({ url: `/schedule/${queryArg.id}`, method: 'DELETE' }),
                invalidatesTags: ['schedule'],
            }),
            getAllSchedules: build.query<GetAllSchedulesApiResponse, GetAllSchedulesApiArg>({
                query: () => ({ url: `/schedule` }),
                providesTags: ['schedule'],
            }),
            createSchedule: build.mutation<CreateScheduleApiResponse, CreateScheduleApiArg>({
                query: (queryArg) => ({
                    url: `/schedule`,
                    method: 'POST',
                    body: queryArg.createScheduleInputDto,
                }),
                invalidatesTags: ['schedule'],
            }),
            getAllRoomSchedules: build.query<
                GetAllRoomSchedulesApiResponse,
                GetAllRoomSchedulesApiArg
            >({
                query: (queryArg) => ({ url: `/schedule/all/${queryArg.roomId}` }),
                providesTags: ['schedule'],
            }),
            updateScheduleSeats: build.mutation<
                UpdateScheduleSeatsApiResponse,
                UpdateScheduleSeatsApiArg
            >({
                query: (queryArg) => ({
                    url: `/schedule/book/${queryArg.id}`,
                    method: 'PATCH',
                    body: queryArg.updateScheduleSeatsInputDto,
                }),
                invalidatesTags: ['schedule'],
            }),
            getRoomById: build.query<GetRoomByIdApiResponse, GetRoomByIdApiArg>({
                query: (queryArg) => ({ url: `/room/${queryArg.id}` }),
                providesTags: ['room'],
            }),
            updateRoom: build.mutation<UpdateRoomApiResponse, UpdateRoomApiArg>({
                query: (queryArg) => ({
                    url: `/room/${queryArg.id}`,
                    method: 'PATCH',
                    body: queryArg.updateRoomInputDto,
                }),
                invalidatesTags: ['room'],
            }),
            deleteRoom: build.mutation<DeleteRoomApiResponse, DeleteRoomApiArg>({
                query: (queryArg) => ({ url: `/room/${queryArg.id}`, method: 'DELETE' }),
                invalidatesTags: ['room'],
            }),
            getRooms: build.query<GetRoomsApiResponse, GetRoomsApiArg>({
                query: () => ({ url: `/room` }),
                providesTags: ['room'],
            }),
            createRoom: build.mutation<CreateRoomApiResponse, CreateRoomApiArg>({
                query: (queryArg) => ({
                    url: `/room`,
                    method: 'POST',
                    body: queryArg.createRoomInputDto,
                }),
                invalidatesTags: ['room'],
            }),
            getMovieById: build.query<GetMovieByIdApiResponse, GetMovieByIdApiArg>({
                query: (queryArg) => ({ url: `/movie/${queryArg.id}` }),
                providesTags: ['movie'],
            }),
            updateMovie: build.mutation<UpdateMovieApiResponse, UpdateMovieApiArg>({
                query: (queryArg) => ({
                    url: `/movie/${queryArg.id}`,
                    method: 'PATCH',
                    body: queryArg.updateMovieInputDto,
                }),
                invalidatesTags: ['movie'],
            }),
            deleteMovie: build.mutation<DeleteMovieApiResponse, DeleteMovieApiArg>({
                query: (queryArg) => ({ url: `/movie/${queryArg.id}`, method: 'DELETE' }),
                invalidatesTags: ['movie'],
            }),
            getAllMovies: build.query<GetAllMoviesApiResponse, GetAllMoviesApiArg>({
                query: () => ({ url: `/movie` }),
                providesTags: ['movie'],
            }),
            createMovie: build.mutation<CreateMovieApiResponse, CreateMovieApiArg>({
                query: (queryArg) => ({
                    url: `/movie`,
                    method: 'POST',
                    body: queryArg.createMovieInputDto,
                }),
                invalidatesTags: ['movie'],
            }),
        }),
        overrideExisting: false,
    });
export { injectedRtkApi as cinemaApi };
export type GetScheduleByIdApiResponse = /** status 200  */ GetOneScheduleOutputDto;
export type GetScheduleByIdApiArg = {
    id: number;
};
export type UpdateScheduleApiResponse = unknown;
export type UpdateScheduleApiArg = {
    id: number;
    updateScheduleInputDto: UpdateScheduleInputDto;
};
export type DeleteScheduleApiResponse = unknown;
export type DeleteScheduleApiArg = {
    id: number;
};
export type GetAllSchedulesApiResponse = /** status 200  */ GetAllSchedulesOutputDto;
export type GetAllSchedulesApiArg = void;
export type CreateScheduleApiResponse = unknown;
export type CreateScheduleApiArg = {
    createScheduleInputDto: CreateScheduleInputDto;
};
export type GetAllRoomSchedulesApiResponse = /** status 200  */ GetAllSchedulesOutputDto;
export type GetAllRoomSchedulesApiArg = {
    roomId: number;
};
export type UpdateScheduleSeatsApiResponse = unknown;
export type UpdateScheduleSeatsApiArg = {
    id: number;
    updateScheduleSeatsInputDto: UpdateScheduleSeatsInputDto;
};
export type GetRoomByIdApiResponse = /** status 200  */ GetOneRoomOutputDto;
export type GetRoomByIdApiArg = {
    id: number;
};
export type UpdateRoomApiResponse = unknown;
export type UpdateRoomApiArg = {
    id: number;
    updateRoomInputDto: UpdateRoomInputDto;
};
export type DeleteRoomApiResponse = unknown;
export type DeleteRoomApiArg = {
    id: number;
};
export type GetRoomsApiResponse = /** status 200  */ GetAllRoomsOutputDto;
export type GetRoomsApiArg = void;
export type CreateRoomApiResponse = unknown;
export type CreateRoomApiArg = {
    createRoomInputDto: CreateRoomInputDto;
};
export type GetMovieByIdApiResponse = /** status 200  */ GetOneMovieOutputDto;
export type GetMovieByIdApiArg = {
    id: number;
};
export type UpdateMovieApiResponse = unknown;
export type UpdateMovieApiArg = {
    id: number;
    updateMovieInputDto: UpdateMovieInputDto;
};
export type DeleteMovieApiResponse = unknown;
export type DeleteMovieApiArg = {
    id: number;
};
export type GetAllMoviesApiResponse = /** status 200  */ GetAllMoviesOutputDto;
export type GetAllMoviesApiArg = void;
export type CreateMovieApiResponse = unknown;
export type CreateMovieApiArg = {
    createMovieInputDto: CreateMovieInputDto;
};
export type GetOneRoomOutputDto = {
    id: number;
    name: string;
    columnsNumber: number;
};
export type GetOneMovieOutputDto = {
    id: number;
    title: string;
    description: string;
    duration: number;
    poster: string;
};
export type GetOneScheduleSeatOutputDto = {
    id: number;
    isBooked: boolean;
    number: number;
    scheduleId: number;
    seatId: number;
};
export type GetOneScheduleOutputDto = {
    id: number;
    startTime: string;
    endTime: string;
    room: GetOneRoomOutputDto;
    movie: GetOneMovieOutputDto;
    scheduleSeats: GetOneScheduleSeatOutputDto[];
};
export type UpdateScheduleInputDto = {
    startTime: string;
    roomId: number;
    movieId: number;
};
export type GetAllSchedulesOutputDto = {
    items: GetOneScheduleOutputDto[];
};
export type CreateScheduleInputDto = {
    startTime: string;
    roomId: number;
    movieId: number;
};
export type UpdateScheduleSeatsInputDto = {
    seatIds: number[];
};
export type UpdateRoomInputDto = {
    name: string;
};
export type GetAllRoomsOutputDto = {
    items: GetOneRoomOutputDto[];
};
export type CreateRoomInputDto = {
    name: string;
};
export type UpdateMovieInputDto = {
    title: string;
    description: string;
};
export type GetAllMoviesOutputDto = {
    items: GetOneMovieOutputDto[];
};
export type CreateMovieInputDto = {
    title: string;
    description: string;
    duration: number;
};
export const {
    useGetScheduleByIdQuery,
    useUpdateScheduleMutation,
    useDeleteScheduleMutation,
    useGetAllSchedulesQuery,
    useCreateScheduleMutation,
    useGetAllRoomSchedulesQuery,
    useUpdateScheduleSeatsMutation,
    useGetRoomByIdQuery,
    useUpdateRoomMutation,
    useDeleteRoomMutation,
    useGetRoomsQuery,
    useCreateRoomMutation,
    useGetMovieByIdQuery,
    useUpdateMovieMutation,
    useDeleteMovieMutation,
    useGetAllMoviesQuery,
    useCreateMovieMutation,
} = injectedRtkApi;
