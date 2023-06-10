using System.ComponentModel.DataAnnotations;

namespace Flights.Dtos
{
    public record NewPassenger(
    [Required][EmailAddress][StringLength(100, MinimumLength = 3)] string Email,
    [Required][MinLength(2)][MaxLength(35)] string FirstName,
    [Required][MinLength(2)][MaxLength(35)] string LastName,
    [Required] bool Gender
        );
}
