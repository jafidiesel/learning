const { expect } = require('chai').use(require('chai-as-promised'))
exports.isValidationError = async function isValidationError(
    request,
    invalidFields
) {
    // The `.eventually` is provided by chai-as-promised. We are doing two things
    // here:
    // - Expecting the axios request to be rejected
    // - Awaiting the assertion resolves to the error of the rejected promise
    const error = await expect(request).to.eventually.be.rejected
    // Axios errors contain the response as `error.response`
    const response = error.response
    // Assert that we respond with status code 400
    expect(response).to.have.property('status', 400)
    // Assert that our response body is a validation error
    expect(response).to.have.nested.property(
        'data.error.name',
        'ValidationError'
    )
    // Assert that the provided invalidFields are included in the response
    Object.entries(invalidFields).forEach(([fieldName, expectedFieldError]) => {
        expect(response).to.have.nested.property(
            `data.error.invalidFields.${fieldName}`,
            expectedFieldError
        )
    })
}