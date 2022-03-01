CREATE TABLE [dbo].[Busqueda_Usuario] (
    [Id_Busqueda_Usuario]              INT          IDENTITY (1, 1) NOT NULL,
    [IdUsuario]         INT NOT NULL,
    [IdBusqueda]        INT NOT NULL
    CONSTRAINT [PK_busqueda_usuario] PRIMARY KEY CLUSTERED ([Id_Busqueda_Usuario] ASC)
);